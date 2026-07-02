FROM node:22.21.1

COPY . /reja
WORKDIR /reja

RUN npm install

CMD ["node", "server.js"]