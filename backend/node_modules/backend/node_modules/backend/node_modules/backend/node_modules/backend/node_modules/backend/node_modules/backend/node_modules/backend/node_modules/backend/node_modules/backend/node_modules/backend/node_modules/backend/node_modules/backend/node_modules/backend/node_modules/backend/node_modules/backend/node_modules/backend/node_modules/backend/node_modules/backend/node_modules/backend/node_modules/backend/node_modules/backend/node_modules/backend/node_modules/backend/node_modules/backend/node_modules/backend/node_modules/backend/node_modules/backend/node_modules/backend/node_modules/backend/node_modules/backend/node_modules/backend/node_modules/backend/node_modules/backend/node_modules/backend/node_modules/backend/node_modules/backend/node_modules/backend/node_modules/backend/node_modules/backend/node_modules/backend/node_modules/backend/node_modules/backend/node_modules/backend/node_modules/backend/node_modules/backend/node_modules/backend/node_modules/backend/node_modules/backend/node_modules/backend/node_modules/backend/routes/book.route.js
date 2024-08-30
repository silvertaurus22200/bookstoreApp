import express from 'express'
import bookController from '../controller/book.controller.js'

const router = express.Router();

router.get('/', bookController.getBook);

export default router;