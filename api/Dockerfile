FROM node:18-alpine3.16

RUN npm install -g nodemon 

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

CMD ["yarn","run","dev-run"] 