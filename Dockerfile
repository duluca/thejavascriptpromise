FROM alpine
MAINTAINER Doguhan Uluca <duluca@gmail.com>
RUN apk --update --no-progress add nodejs unrar bash git

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY . /usr/src/app

ENV HOST "0.0.0.0"
EXPOSE 3002

RUN npm install -g nodemon
RUN npm install
CMD [ "npm", "start" ]