FROM node:18-alpine3.16

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY package.json .
COPY package-lock.json .

RUN npm install --silent
RUN npm install react-scripts -g 

COPY . .

# EXPOSE 3000

CMD ["yarn","run","start"] 