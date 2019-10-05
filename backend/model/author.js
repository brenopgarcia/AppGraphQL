import mongoose from 'mongoose'

const AuthorSchema = new mongoose.Schema({
  name: String,
  age: String
})

export default mongoose.model('Author', AuthorSchema)
