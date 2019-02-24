FROM node:8
WORKDIR /app
COPY package.json /app
RUN npm i -g serve
RUN npm install
ADD ./src /app/src
ADD ./public /app/public
EXPOSE 3000