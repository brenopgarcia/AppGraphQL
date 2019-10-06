import 'dotenv/config'

import express from 'express'

import schema from './schema/schema'
import graphqlHTTP from 'express-graphql'
import cors from 'cors'

import './database'

class App {
  constructor() {
    this.server = express()
    this.server.listen(4000, () => {
      console.log('Now listening for requests on port 4000')
    })
    this.middlewares()
    this.routes()
  }
  middlewares(){
    this.server.use(cors())
  }

  routes() {
    this.server.use('/graphql', graphqlHTTP({
      schema,
      graphiql: true
    }))
  }


}

export default new App()
