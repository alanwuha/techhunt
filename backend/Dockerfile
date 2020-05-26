# Use an official lightweight Python image
# https://hub.docker.com/_/python
FROM python:3.6.9

# Set the working directory to /app
WORKDIR /app/backend

# Copy the current directory contents into the container at /app
ADD . .

# Update pip
RUN pip install --upgrade pip

# Install dependencies
RUN pip install -r requirements.txt

# Set the working directory to /app/mysite
WORKDIR /app/backend/mysite

# Migrate database
RUN python manage.py migrate

# Collect static files
RUN python manage.py collectstatic --no-input

# Service must listen to $PORT environment variable
# This default value facilitates local development.
ENV PORT 8000

# Expose port
EXPOSE $PORT

# Run the Django server
CMD python manage.py runserver 0.0.0.0:$PORT --noreload