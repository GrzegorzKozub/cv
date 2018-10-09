git rev-parse --short HEAD > src/api/api/version.txt
$env:COMPOSE_PROJECT_NAME='cv'
docker-compose up
