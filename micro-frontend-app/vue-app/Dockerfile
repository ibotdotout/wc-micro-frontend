FROM node:alpine

EXPOSE 3004
ENV PORT=3004

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .
RUN npm run build:wc

CMD ["npm", "run", "serve:docker"]
