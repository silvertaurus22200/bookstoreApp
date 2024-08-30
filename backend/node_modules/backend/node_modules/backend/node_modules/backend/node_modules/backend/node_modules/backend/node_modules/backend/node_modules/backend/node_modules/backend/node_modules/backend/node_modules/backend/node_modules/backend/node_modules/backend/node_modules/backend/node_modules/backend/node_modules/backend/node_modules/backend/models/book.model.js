import mongoose from 'mongoose'

const  bookSchema  = new mongoose.Schema({
    id: {type: Number , unique: true, required: true},
    title: String,
    author: String,
    price: Number,
    category: String,
    image: String

});

const Book = mongoose.model('Book', bookSchema);

export default Book;