if (!(Test-Path -Path 'wkhtmltopdf.exe')) {
    Write-Host 'download wkhtmltopdf'

    if ((Get-Command -Name '7z' -ErrorAction SilentlyContinue) -eq $null) {
        throw '7z needed to unpack wkhtmltopdf'
    }

    $wkhtmltopdf = Start-Job -ScriptBlock {
        Set-Location $using:pwd

        [Net.ServicePointManager]::SecurityProtocol += [Net.SecurityProtocolType]::Tls12
        Invoke-WebRequest `
            -Uri 'https://github.com/wkhtmltopdf/wkhtmltopdf/releases/download/0.12.5/wkhtmltox-0.12.5-1.mxe-cross-win64.7z' `
            -UseBasicParsing `
            -OutFile 'wkhtmltox.7z'
        [Net.ServicePointManager]::SecurityProtocol -= [Net.SecurityProtocolType]::Tls12

        7z e 'wkhtmltox.7z' 'wkhtmltox/bin/wkhtmltopdf.exe' -y | Out-Null
        Remove-Item -Path 'wkhtmltox.7z'
    }
}

Write-Host 'start api'

$api = Start-Job -ScriptBlock {
    Set-Location $using:pwd
    dotnet run `
        --project ./src/api/api/api.csproj `
        --configuration Release `
        --no-launch-profile
}

Write-Host 'start web'

$web = Start-Job -ScriptBlock {
    Set-Location (Join-Path $using:pwd '/src/web')
    npm install
    npm start
}

function Wait ($url) {
    Write-Host "wait for $url " -NoNewline
    do {
        Write-host '.' -NoNewline
        try {
            $test = Invoke-WebRequest -Uri $url -UseBasicParsing
        } catch {
            Start-Sleep -Seconds 1
        }
    } while ($test -eq $null -or $test.StatusCode -ne 200)
    Write-Host ' ready'
}

Wait 'http://localhost:5000/cv'
Wait 'http://localhost:4200'

if ($wkhtmltopdf) {
    Write-Host 'wait for wkhtmltopdf ' -NoNewline
    do {
        Write-host '.' -NoNewline
        Start-Sleep -Seconds 1
    } while (!(Test-Path -Path 'wkhtmltopdf.exe'))
    Write-Host ' ready'

    Wait-Job $wkhtmltopdf | Out-Null
    Remove-Job $wkhtmltopdf
}

Write-Host 'render pdf'

./wkhtmltopdf `
    --footer-html 'http://localhost:4200/footer' `
    --javascript-delay 750 `
    --debug-javascript `
    --margin-bottom 3cm `
    --margin-left 1cm `
    --margin-right 1cm `
    --margin-top 1cm `
    --log-level none `
    'http://localhost:4200/cv' `
    './pdf/cv.pdf'

function Stop ($job, $name) {
    Write-Host "stop $name"
    Stop-Job $job
    Wait-Job $job | Out-Null
    Remove-Job $job
}

Stop $web 'web'
Stop $api 'api'

