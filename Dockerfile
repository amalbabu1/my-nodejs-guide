FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install 
RUN npm run build
CMD [ "node","dist/index.js" ]
EXPOSE 3000