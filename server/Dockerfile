FROM node:10.15.3
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install 
COPY . .
EXPOSE 5000
CMD ["npm","start"]