FROM node:8.12 AS build

RUN wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add -
RUN sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
RUN apt-get update && apt-get install -yq google-chrome-stable

RUN npm install @angular/cli@6.2.1 --global

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

ENV PATH /usr/src/app/node_modules/.bin:$PATH

COPY package.json package-lock.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

RUN ng lint
RUN ng test --watch=false
RUN ng build

FROM nginx:1.15-alpine AS final

RUN sed -i '/index  index.html index.htm;/a\ \ \ \ \ \ \ \ try_files $uri $uri/ /index.html;' /etc/nginx/conf.d/default.conf

COPY --from=build /usr/src/app/dist/web /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

