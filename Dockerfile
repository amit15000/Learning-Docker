FROM node
WORKDIR /STUDYNOTION

COPY . .

RUN npm i

EXPOSE 4000

CMD [ "npm", "start" ]