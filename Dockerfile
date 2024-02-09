FROM node:alpine

WORKDIR /app

COPY . .

WORKDIR /app/client
RUN npm i
RUN npm run build

WORKDIR /app/server
RUN npm i

EXPOSE 3001

CMD ["node", "app.js"]
