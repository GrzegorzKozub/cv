FROM mcr.microsoft.com/dotnet/core/aspnet:3.0 AS base
WORKDIR /app

FROM mcr.microsoft.com/dotnet/core/sdk:3.0 AS build
WORKDIR /src
COPY api.csproj .
RUN dotnet restore api.csproj
COPY . .
WORKDIR /src
RUN dotnet build api.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish api.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
COPY --from=publish /src/version.txt .
#ENV ASPNETCORE_URLS http://*:5000
#EXPOSE 5000
EXPOSE 80
ENTRYPOINT ["dotnet", "api.dll"]
