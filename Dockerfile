FROM node:21 as build

WORKDIR /usr/src/app

COPY . .

WORKDIR /usr/src/app/client
RUN npm i
RUN npm run build

WORKDIR /usr/src/app/server
RUN npm i

FROM nginx:stable-alpine

# nginx
COPY --from=build /usr/src/app/client/build /usr/share/nginx/html
COPY --from=build /usr/src/app/nginx.conf /etc/nginx/sites-enabled/default
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

# server
EXPOSE 3001

CMD ["node", "app.js"]
