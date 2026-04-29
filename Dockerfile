FROM busybox:1.37.0

RUN adduser -D static
USER static
WORKDIR /home/static

COPY _site .

CMD ["busybox", "httpd", "-f", "-v", "-p", "3000"]
