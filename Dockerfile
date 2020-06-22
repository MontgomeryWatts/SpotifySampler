FROM node:12.13.1-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

CMD ["npm", "run", "start"]
