#FROM node:lts-alpine3.17
FROM oven/bun:alpine as base

WORKDIR /app

COPY package*.json ./
COPY bun.lockb ./

RUN bun install

COPY . .

ENV HOST 0.0.0.0
EXPOSE 3000

RUN bun run build

CMD ["bun", "start"]
