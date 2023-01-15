FROM node:19.4-alpine

RUN mkdir -p /myapp

WORKDIR /myapp

COPY . /myapp
