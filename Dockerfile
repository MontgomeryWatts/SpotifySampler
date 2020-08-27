FROM node:12.13.1-alpine

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm i

COPY . .

RUN npm run build

EXPOSE 80 27015 27016 27017

CMD ["npm", "run", "start"]
