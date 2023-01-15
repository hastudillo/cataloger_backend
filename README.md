# Cataloger

This project was build with [Nest](https://github.com/nestjs/nest) framework version 9.

## Installation

This project has been developed using `npm` as a package manager. I should work with other package managers (such as yarn or pnpm...). Run the following command to prepare you project to be run.

```bash
$ npm install
```

## Running the app

The app needs to connect to a MongoDB instance in startup (default port 27017).
You may want to run `docker run --name mongodb -d -p 27017:27017 mongo` to do have such an instance before starting the app.

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Build

Run `npm run build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running the app in any environment

A `Dockerfile` file has been added to prepare get the project ready to be run in any environment.

```bash
$ docker build -t cataloger_backend .
$ docker run --name cataloger_backend -p 3000:3000 cataloger
```

A `docker-compose.yml` can make the task even easier:

```bash
$ docker-compose up
```

## Running the app along with the Front End

In order to run this project along with the FE side (called `cataloger`) another `docker-compose` file has been added.
Retrieve the `parent-docker-compose.yml` and place it in a parent folder:

```
.
|--  parent-docker-compose.yml
|--  cataloger/
|--  cataloger_backend/
```

```bash
docker-compose -f parent-docker-compose.yml up
```
