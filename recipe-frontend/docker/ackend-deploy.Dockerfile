FROM php:8.2-apache

RUN docker-php-ext-install pdo pdo_mysql intl

ENV APACHE_DOCUMENT_ROOT=/app/public

WORKDIR /app

COPY ../projet-frontend /app