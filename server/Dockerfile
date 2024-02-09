# server
FROM node:20 as builder

WORKDIR /app

COPY package.json /app/package.json

RUN npm install

COPY . /app

EXPOSE 3001

USER node

CMD ["node", "index.js"]
