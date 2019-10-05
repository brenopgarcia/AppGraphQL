import mongoose from 'mongoose'

class Database {
  constructor(){
    this.mongo()
  }

  mongo(){
    this.mongoConnection = mongoose.connect(`mongodb://${process.env.MONGOUSER}:${process.env.MONGOPASS}@${process.env.MONGODOMAIN}:${process.env.MONGOPORT}/${process.env.MONGOSCHEMA}`, {
      useNewUrlParser: true,
      useUnifiedTopology: true }
      )

      mongoose.connection.once('open', () => {
        console.log('Connected to mLab')
      })
  }
}

export default new Database()
