FROM node:14
WORKDIR /usr/src/app
COPY . .
RUN npm install 
EXPOSE 9000
CMD ["npm", "start"]
