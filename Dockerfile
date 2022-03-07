# etapa de compilaci n
FROM node:14-alpine
WORKDIR /app
RUN apk add --update \
    python3 \
    python3-dev \
    py-pip \
    build-base \
  && pip install virtualenv \
  && rm -rf /var/cache/apk/* \
  && apk upgrade \
  && apk add --no-cache bash git openssh
COPY package*.json ./
RUN npm install
COPY ./ ./

EXPOSE 1377

CMD ["npm", "start"]