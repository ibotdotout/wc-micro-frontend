FROM node:alpine

EXPOSE 3005
ENV PORT=3005

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .
RUN npm run build:wc
RUN npm run package

CMD ["npm", "run", "serve:docker"]
