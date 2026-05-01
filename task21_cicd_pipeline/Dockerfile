# Use the official Node.js 18 image as the base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install --production

# Copy the rest of the application code
COPY . .

# Expose the port the app runs on (BankingApp default)
EXPOSE 3000

# Command to start the application
CMD ["node", "app.js"]
