# server
FROM node:21 as build

WORKDIR /usr/src/app

COPY . .

WORKDIR /usr/src/app/client
RUN npm i
RUN npm run build

WORKDIR /usr/src/app/server
RUN npm i

EXPOSE 3001

CMD ["node", "app.js"]

# nginx
FROM nginx:stable-alpine

COPY --from=build /usr/src/app/client/build /var/www/build
COPY --from=build /usr/src/app/nginx.conf /etc/nginx/sites-enabled/default

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
