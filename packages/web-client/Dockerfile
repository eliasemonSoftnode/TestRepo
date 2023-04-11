FROM node:18-alpine3.17
RUN addgroup -S app && adduser -S app -G app
USER app
WORKDIR /user/src/app
COPY package.json .
RUN yarn
RUN yarn global add nodemon
COPY . .
EXPOSE 3000
CMD ["yarn", "dev"]