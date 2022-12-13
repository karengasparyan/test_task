FROM node:16

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

COPY ./dist ./dist

ENV PORT 3000

ENV NODE_ENV local

CMD ["npm", "run", "start:dev"]
