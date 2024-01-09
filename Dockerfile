FROM node:lts

WORKDIR /app

COPY package.json ./package.json /app/
COPY package-lock.json ./package-lock.json /app/

RUN npm i

COPY . .

EXPOSE 5000

ENTRYPOINT [ "run.sh", "run" ]