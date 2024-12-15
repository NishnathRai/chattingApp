FROM node:18-alpine
COPY backEnd
WORKDIR /app/backEnd
RUN npm install
EXPOSE 3000
CMD ["node", "index.js"]
