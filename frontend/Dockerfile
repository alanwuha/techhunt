# Use an official NodeJS image
FROM node

# Set the working directory to /app/frontend
WORKDIR /app/frontend

# Copy the current directory contents into the container at /app/frontend
COPY . .

# Install dependencies
RUN npm install

# Expose port
EXPOSE 3000

# Run the NodeJS server
CMD ["npm", "start"]