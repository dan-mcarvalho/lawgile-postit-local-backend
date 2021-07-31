const express = require('express')
const { postgraphile } = require("postgraphile");
require('dotenv').config()

const app = express();

app.use(
  postgraphile(
    process.env.DB_CONNECTION_STRING,
    process.env.DB_DATABASE,
    { 
      watchPg: true,
      graphiql: true,
      enhanceGraphiql: true
    }
  )
)

app.response()

app.listen('3100')