FROM node:20.10.0

WORKDIR /app

COPY package*.json ./
COPY prisma ./prisma/

RUN yarn

RUN yarn add bcrypt

COPY . .

RUN yarn build


CMD [ "yarn", "start:dev"]