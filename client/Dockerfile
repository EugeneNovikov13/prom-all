# client
FROM node:alpine as builder

WORKDIR /app

COPY . .

RUN npm install
RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /app/build /var/www
COPY --from=builder app/nginx.conf /etc/nginx/sites-enabled/default

EXPOSE 80
