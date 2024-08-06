# Building
FROM node:20.10.0-alpine3.17 AS builder

# define working directory
WORKDIR /app

COPY package*.json .

RUN npm install

# copy source from current dir to working dir
COPY . .

# build
RUN npm run build
# RUN npm run build --production
