FROM node:10.15.3
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY . /usr/src/app

RUN npm install

ADD src /usr/src/app/src
ADD public /usr/src/app/public

RUN npm build

CMD ["npm", "start"]