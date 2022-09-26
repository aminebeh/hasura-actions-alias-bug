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
