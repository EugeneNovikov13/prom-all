# server
FROM node:alpine as builder

WORKDIR /app

COPY . .

RUN npm install

EXPOSE 3001

USER node

CMD ["node", "index.js"]
