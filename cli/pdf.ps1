param ([string] $CvUrl, [string] $FooterUrl, [string] $Dir, [string] $File)

if ($CvUrl -eq '') { $CvUrl = 'http://localhost:4200/cv' }
if ($FooterUrl -eq '') { $FooterUrl = 'http://localhost:4200/footer' }
if ($Dir -eq '') { $Dir = '.' }
if ($File -eq '') { $File = 'Grzegorz Kozub.pdf' }

wkhtmltopdf `
  --footer-html $FooterUrl `
  --margin-bottom 3cm `
  --margin-left 1cm `
  --margin-right 1cm `
  --margin-top 1cm `
  $CvUrl `
  (Join-Path $Dir $File)
