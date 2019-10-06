# AppGraphQL

This is not a real project. It is a GraphQL example using NodeJS, ReactJS, GraphQL and MongoDB.

## MongoDB
First of all, create an instance of MongoDB and configure .env file.

## Backend

### `yarn dev`

Runs the app in the development mode.<br />


## Frontend

### `yarn start`
Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## How it works

### GraphiQL 
Open [http://localhost:4000/graphql](http://localhost:4000/graphql) to view it in the browser.

#### Creating Authors
mutation {<br />
	addAuthor(name: "Put the name here...", age: "Age is an integer (without quotes)" ){<br />
    name<br />
    age<br />
  }<br />
}<br />
