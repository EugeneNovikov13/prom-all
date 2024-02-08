# server
FROM node:21

WORKDIR /usr/src/app

COPY . .

WORKDIR /usr/src/app/client
RUN npm i
RUN npm run build

WORKDIR /usr/src/app/server
RUN npm i

COPY /usr/src/app/client/build /var/www/build
COPY /usr/src/app/nginx.conf /etc/nginx/sites-enabled/default

EXPOSE 3001

CMD ["node", "app.js"]
