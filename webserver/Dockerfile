FROM node AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install
COPY public ./public
COPY src ./src
RUN npm run build

FROM nginx
COPY --from=build /app/build /usr/share/nginx/html
COPY default.conf /etc/nginx/conf.d/default.conf