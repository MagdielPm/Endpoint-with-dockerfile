FROM node:14
WORKDIR /src/server
COPY package.json ./src/server
RUN npm install 
COPY . /app
CMD ["npm", "start"]
