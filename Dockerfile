# Stage
FROM node:16-alpine as builder

WORKDIR /app

ENV NODE_ENV development

COPY package.json /app/

RUN npm install

COPY . .

RUN npm run build

# Final production image
FROM node:16-alpine

WORKDIR /app

ENV NODE_ENV production

COPY package.json /app/

RUN npm install

COPY --from=builder /app/dist /app/dist

ENV DATABASE=mongodb://host.docker.internal:27017/cataloger

EXPOSE 3000

ENTRYPOINT [ "node", "dist/main" ]