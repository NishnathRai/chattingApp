FROM node:18-alpine

# Copy the 'backEnd' directory from the host machine to the container
COPY backEnd /app/backEnd

# Set the working directory inside the container
WORKDIR /app/backEnd

# Install the dependencies
RUN npm install

# Expose the port your application will run on
EXPOSE 3000

CMD ["node", "index.js"]
