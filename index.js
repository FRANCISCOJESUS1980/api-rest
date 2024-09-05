import dotenv from 'dotenv'
import express from 'express'
import connectDB from './src/config/db'

dotenv.config()
// Crear la aplicación Express
const app = express()
app.use('/saludar', (req, res) => {
  return res.status(404).json('ruta no encontrada')
})
// Middlewares
app.use(express.json())

// Iniciar el servidor
app.listen(3000, () => {
  console.log('http://localhost:3000')
})
