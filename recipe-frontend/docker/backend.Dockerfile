FROM php:8.2-cli-alpine

RUN apk add --no-cache git unzip mariadb-client icu-dev \
 && docker-php-ext-install pdo pdo_mysql intl

WORKDIR /app

CMD php -t public -S 0.0.0.0:8000
