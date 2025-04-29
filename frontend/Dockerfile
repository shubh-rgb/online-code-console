# Step 1: Build the React application
FROM node:18-slim AS build


WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

COPY craco.config.js ./



# Install dependencies
RUN npm install

# Copy the rest of the app's source code
COPY . .

# Set this before the build step
ENV NODE_OPTIONS=--openssl-legacy-provider

# Build the React app for production
RUN npm run build

# # Step 2: Serve the React app with Nginx
FROM nginx:alpine

COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
