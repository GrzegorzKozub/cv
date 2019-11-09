FROM node:10.17-alpine AS build

#RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
#RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
#RUN apt-get update && apt-get install -yq google-chrome-stable

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

# https://github.com/nodejs/docker-node/issues/282
RUN apk add --no-cache --virtual .gyp python make g++ && \
    npm install && \
    apk del .gyp

ENV PATH /usr/src/app/node_modules/.bin:$PATH

#RUN ng lint
#RUN ng test --watch=false
RUN ng build --aot --prod --configuration=docker

FROM nginx:1.17-alpine AS final

RUN sed -i '/index  index.html index.htm;/a\ \ \ \ \ \ \ \ try_files $uri $uri/ /index.html;' /etc/nginx/conf.d/default.conf

COPY --from=build /usr/src/app/dist/web /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

