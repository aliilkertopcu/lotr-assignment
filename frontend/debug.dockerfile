# Create image based off of the official 12.8-alpine
FROM node:16-alpine

#RUN echo "nameserver 8.8.8.8" |  tee /etc/resolv.conf > /dev/null
WORKDIR /app

# Copy dependency definitions
COPY package*.json ./

RUN npm install -g @angular/cli
RUN npm install

COPY . /app/

EXPOSE 4200 49153