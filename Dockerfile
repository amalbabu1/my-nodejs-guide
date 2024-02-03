FROM node:18-alpine
WORKDIR /app
COPY package.json .
COPY package-lock.json .
RUN npm install 
COPY . .
CMD [ "node","dist/index.js" ]
EXPOSE 3000