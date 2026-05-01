FROM node:20-alpine

WORKDIR /usr/src/app

# Install dependencies first to leverage Docker cache
COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "dev"]
