FROM node:22-alpine AS builder

WORKDIR /usr/src/app
COPY package.json .
RUN npm i
COPY . .
RUN npm run build

FROM nginx:alpine

COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=builder /usr/src/app/.output/public /usr/src/app
