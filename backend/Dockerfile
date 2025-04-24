# Step 1: Use Node.js base image 
FROM node:18-slim

# Step 2: Install dependencies for Python, Java Runtime, and C
RUN apt-get update && \
    apt-get install -y \
    python3 \
    gcc \
    make \
    curl \
    openjdk-17-jdk \
    && apt-get clean

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the source code into the container
COPY . .

# Expose backend API port
EXPOSE 5000

# Start the backend server
CMD ["node", "server.js"]
