FROM node
WORKDIR /STUDYNOTION

COPY . .

RUN npm i

EXPOSE 3000

CMD [ "npm", "start" ]