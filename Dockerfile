FROM node:10.16.3

RUN mkdir -p /home/application/app/node_modules && chown -R node:node /home/application/app

ENV NPM_CONFIG_PREFIX=/home/node/.npm-global

WORKDIR /home/application/app

COPY package*.json ./

USER node

COPY --chown=node:node . .

RUN npm install

CMD [ "node", "app.js"]