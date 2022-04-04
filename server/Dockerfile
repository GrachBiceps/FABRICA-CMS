FROM node:latest

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 8080

ENTRYPOINT ["npm", "run", "server"]