FROM node:14-alpine

WORKDIR /app

COPY package*.json ./

RUN apk add --update python3 make g++ && rm -rf /var/cache/apk/*
RUN npm install -g npm@latest
RUN npm install --python=python2.7
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
