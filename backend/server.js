// const express = require('express')
// const products = require('./data/products')
// const dotenv = require('dotenv')
// W package.json dodaje "type":"module" zeby mozna bylo importowac jak we front

import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'

import { errorHandler, notFound } from './middleware/error.js'

const PORT = process.env.PORT || 5000

dotenv.config()
connectDB()
const app = express()

//to accept JSON data in body in the Controller
app.use(express.json())

app.use('/products', productRoutes)
app.use('/users', userRoutes)

// app.get('/', (req, res) => {
//   res.send('Yo')
// })

app.use(notFound)
app.use(errorHandler)

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT} :)`
  )
)
