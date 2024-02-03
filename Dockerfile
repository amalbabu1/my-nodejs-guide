FROM node:18-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install 
COPY . .
CMD [ "ts-node","src/index.ts" ]
EXPOSE 3000