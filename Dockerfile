FROM duluca/minimal-nginx-web-server:1.13.8-alpine
COPY public /var/www
CMD 'nginx'