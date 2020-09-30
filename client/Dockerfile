FROM node:lts-alpine3.11 as builder
COPY . .
RUN npm i
RUN npm run build

FROM node:lts-alpine3.11
WORKDIR /usr/src/app
COPY --from=builder build build
RUN npm i -g serve
EXPOSE 3000
CMD ["serve", "-s", "build"]
