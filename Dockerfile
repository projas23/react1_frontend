# Step 1: Build environment
# Use a node base image
FROM node:alpine as build

# Set working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Build the project for production
RUN npm run build

# Step 2: Serve environment
# Use nginx to serve the static files
FROM nginx:alpine

# Copy static assets from builder stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to the outside once the container has launched
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
