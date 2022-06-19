FROM node

WORKDIR /frontend

COPY ["package.json", "package-lock.json", "./"]

RUN npm install

COPY . /frontend

EXPOSE 3000

CMD ["npm", "run", "dev"]