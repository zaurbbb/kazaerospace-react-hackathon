FROM node:16.17-alpine

WORKDIR /opt/app
ENV PATH="/opt/app/node_modules/.bin:$PATH"

COPY . .

RUN npm ci --production

CMD ["npm", "start"]