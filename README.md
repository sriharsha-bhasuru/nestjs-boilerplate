## Installation

```bash
npm install
```

## Generating Migrations
Run below command to generate migrations for the entities in the project

Verify if the file is generated below the db/migrations folder of the project
```bash
npm run migration:generate -- db/migrations/{NAME_OF_THE_MIGRATION}
```

## Running Migrations
Running the below command will check the database and picks the migrations that are needs to be executed
```bash
npm run migration:run
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Accessing the APIs
API enpoints are accessible via swagger-ui. Use the url http://localhost:3000/api to access swagger-ui when running locally