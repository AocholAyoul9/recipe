FROM php:8.2-cli-alpine

RUN apk add --no-cache git unzip mariadb-client icu-dev \
 && docker-php-ext-install pdo pdo_mysql intl

WORKDIR /app

CMD \
 php bin/console doctrine:migrations:migrate -q --env=test && \
 php bin/console doctrine:fixtures:load -q --env=test && \
 php bin/phpunit
