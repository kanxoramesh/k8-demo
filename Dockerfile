FROM node:19-alpine

ENV PORT=8080
EXPOSE 8080
WORKDIR /usr/src/app

COPY package*.json ./

RUN yarn

COPY . .

CMD [ "node", "server/app.js" ]
