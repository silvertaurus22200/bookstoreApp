import  Book from '../models/book.model.js'
const getBook = async (req, res) => {
    try {
        const books = await Book.find(); // Retrieve all books from the database
        res.status(200).json({
            status: 'success',
            results: books.length,
            data: {
                books,
            },
        });
    } catch (error) {
        res.status(500).json({
            status: 'error',
            message: error.message,
        });
    }
};
export default {getBook,} ;