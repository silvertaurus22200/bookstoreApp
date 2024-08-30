import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose";
import bookRoute from './routes/book.route.js'
import userRoute from './routes/user.route.js'
import cors from 'cors'

const app = express();

dotenv.config();
const port = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// app.get('/', (req, res)=> {
//     res.send('Hello World')
// })

app.use(cors());
app.use(express.json());

try {
    
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB")

} catch (error) {
    console.log("Error: ", error)
}


//defining routes
app.use('/book', bookRoute);
app.use('/user', userRoute);

app.listen(port,()=>{
    console.log(`App is listening on port ${port}`)
})