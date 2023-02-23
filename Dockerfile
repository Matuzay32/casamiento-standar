FROM node:16-alpine

RUN ln -s /lib/libc.musl-x86_64.so.1 /lib/ld-linux-x86-64.so.2

WORKDIR /app

COPY package*.json ./

ENV NODE_ENV=production

RUN npm i && npm i next -g

COPY . ./

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start"]
