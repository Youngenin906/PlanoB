FROM node:alpine
RUN npm install -g serve
WORKDIR /app
COPY . .
EXPOSE 3001
CMD ["serve", "-s", ".", "-l", "3001"]