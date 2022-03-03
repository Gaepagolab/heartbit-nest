## Description

Heartbit Server using [Nest](https://github.com/nestjs/nest)(w/ TypeScript)

## Installation

```bash
yarn
```

## Running the app
* prerequisite: `.env` file  
  Must obtain `.env` file for environment variable for Running.  
  (Contact to repository maintainer.)

  or see code of `validationSchema: Joi.object` in [app.module.ts](./src/app.module.ts) file to check which key required.

### Development
<details>
  <summary>prerequisite: database for local testing</summary>
  <blockquote>
  Install PostgreSQL with version '13.3'(current version of RDS).

  (Install via '[Docker](https://hub.docker.com/_/postgres)' or directly on your local machine, as you like.)
  
  ```bash
  docker rm pg-container-13.3 --force # if running container exists.
  docker run --name pg-container-13.3 -p 5432:5432 -e POSTGRES_USER=root -e POSTGRES_PASSWORD=dnwnwjdqhrwk! -e POSTGRES_DB=wind -d postgres:13.3
  docker exec -i pg-container-13.3 psql -U root postgres -c "CREATE DATABASE wind;"
  docker ps
  ```
  </blockquote>
</details>


```bash
yarn start
```

### Watch Mode

```bash
yarn dev #or
yarn start:dev
```

### production mode(not yet @2022-03-04)

```bash
yarn start:prod
```

## Test

### unit tests

```bash
yarn test
```

### e2e tests

```bash
yarn test:e2e
```

## Migration
Install typeorm-cli for easily debugging
```bash
yarn global add typeorm
# check installation
which typeorm
```

```bash
## ## `yarn build` required for preventing un-synchronized JS(transpiled) with TS(source).
yarn build && typeorm migration:show
yarn build && typeorm migration:generate # same as 'yarn migration:generate'
yarn build && typeorm migration:run
yarn build && typeorm migration:revert
```

## Project Directory Structure
see [directory-structure.md](./docs/directory-structure.md) file.
