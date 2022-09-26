Example Action to generate a JWT token, create a user and insert into the database

[Link to Youtube Demo](https://www.youtube.com/watch?v=oqbxEp4FIjE)

## Start Hasura and Postgres

```
docker-compose up -d
```

## Apply Migrations

Inside graphql-engine docker container (docker exec -it <container> /bin/bash), run the following command:

```
cd hasura
hasura-cli migrate apply
hasura-cli metadata apply
```

## Run Express Function

```
cd functions/nodejs-express
npm install
npm start
```
