# Building
FROM node:20.10.0-alpine3.17 AS builder

# define working directory
WORKDIR /app

COPY package*.json .

RUN npm install

# copy source from current dir to working dir
COPY . .

# build
RUN npm run build
# RUN npm run build --production

FROM nginx:1.27-alpine3.19-perl AS runner

# Copy the built React app to Nginx's web server directory
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Start Nginx when the container runs
CMD ["nginx", "-g", "daemon off;"]
