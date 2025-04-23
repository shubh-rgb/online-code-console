# Step 1: Build the React application
FROM node:18-slim AS build


WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./
# COPY package*.json ./
COPY craco.config.js ./
# RUN npm install


# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Set this before the build step
ENV NODE_OPTIONS=--openssl-legacy-provider

# Build the React app for production
RUN npm run build

# Step 2: Serve the React app with Nginx
FROM nginx:alpine

# Copy the build files from the previous stage
COPY --from=build /app/build /usr/share/nginx/html

# Copy the Nginx configuration file
COPY nginx/default.conf /etc/nginx/conf.d/

# Expose the default port for HTTP
EXPOSE 3000

# Run Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
