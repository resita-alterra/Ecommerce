FROM nginx:stable
MAINTAINER resita "resita@alterra.id"

RUN mkdir -p /alterra/www/reak
RUN mkdir -p /alterra/logs/nginx

COPY default.conf /etc/nginx/conf.d/
COPY . /alterra/www/reak/

WORKDIR /alterra/www/reak
