import mongoose from 'mongoose'

const BookSchema = new mongoose.Schema({
  name: String,
  genre: String,
  authorId: String
})

export default mongoose.model('Book', BookSchema)
