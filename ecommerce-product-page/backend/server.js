const express = require('express');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware');
const connectDB = require('./config/db');
const port = process.env.PORT || 9000

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

connectDB()

app.use('/api/products', require('./routes/productRoutes'))
app.use(errorHandler)

app.listen(port, () => console.log(`Server is listenning on Port:${port}
`))

