FROM node:18-alpine3.16
RUN addgroup -S app && adduser -S app -G app
USER app

WORKDIR /user/src/app

COPY package.json 
RUN yarn

COPY . .
ENV PORT 