FROM node:14.16.0

WORKDIR /app/frontend
COPY package.json /app/frontend

RUN npm install
RUN npm rebuild node-sass

EXPOSE 3000
CMD ["npm", "start"]