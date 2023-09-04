FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*
RUN npm install -g npm@6.14.18
RUN npm install

COPY . .

RUN adduser -D app_user
USER app_user

EXPOSE 3000

CMD ["npm", "start"]
