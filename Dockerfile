FROM alpine

RUN apk update && apk add zip

CMD ./pkg.sh

