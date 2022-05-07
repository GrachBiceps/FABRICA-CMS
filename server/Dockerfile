FROM node:latest

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 49003

ENTRYPOINT ["npm", "run", "server"]