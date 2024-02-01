# Findash App: a Nestjs API

A Nest.js API with Prisma, PostgreSQL for authentication. This project serve as the API for the [Findash Front]([https://github.com/miguelCassimiro99/findash-app](https://github.com/miguelCassimiro99/findash-front))

## Features 📜
- [x]  Authentication (Passport with JWT strategy)
- [x]  Prisma as ORM
- [x]  Docker
- [x]  Swagger Documentation

---

This API can be used as a template to create a API with authentication, connection with DB using Prisma and PostgreSQL (all running in Docker).

⚠️ During the development I have a little Type problem using bcrypt with NPM. So I recommend you to use yarn on this application. If install the packages locally, remember to remove the bcrypt from package.json before run the Docker.

How does it works 🔍


### Tools 🛠️

🌐 [Nest](https://nestjs.com/)

🌐 [Prisma](https://www.prisma.io/)

🌐 [Docker](https://www.docker.com/)

🌐 [Docker Compose](https://docs.docker.com/compose/)

🌐 [Swagger](https://docs.nestjs.com/openapi/introduction)


---

## Setup 🏗️


## Getting Started

First you need to create the .env file and add this variables into:

```
DB_USER=
DB_PASSWORD=

# the current url passing the user and password
DATABASE_URL="postgresql://db_user:db_password@localhost:5432/db_name"

```

Then, you need to run the Prisma migrations:

```
npx prisma migrate dev
```

After that assuming you have a knowledge about the Docker and docker-compose.yml files you can simple run:

```
docker-compose up

````

It will run your application into a container.


Open [http://localhost:3000/api](http://localhost:3000/api) with your browser to see the Doc.


## Tags:

\#nest \#api \#login \#postgres \#prisma \#auth \#docker


