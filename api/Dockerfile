FROM node

WORKDIR /api

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . /api

EXPOSE 8000

CMD ["npm", "start"]