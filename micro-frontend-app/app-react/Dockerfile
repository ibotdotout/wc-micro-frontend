FROM node:alpine

EXPOSE 3003
ENV PORT=3003
ENV IMAGE_INLINE_SIZE_LIMIT=100000000

WORKDIR /app

COPY package.json .
RUN npm install

COPY . .
RUN npm run build

CMD ["npm", "run", "serve:docker"]
