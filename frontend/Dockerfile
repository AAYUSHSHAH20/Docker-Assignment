# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all other source files
COPY . .

# Expose the port your Express server runs on
EXPOSE 3000

# Start the server
CMD ["node", "server.js"]
