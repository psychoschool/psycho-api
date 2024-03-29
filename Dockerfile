FROM node:16-alpine

WORKDIR /usr/app

COPY package.json .
COPY yarn.lock .
RUN yarn install
COPY . .

RUN yarn build
CMD node dist/js/app.js
