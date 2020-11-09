FROM node:alphine

WORKDIR /app

COPY package*.json .

RUN npm i

COPY src .

CMD ["npm", "start"]