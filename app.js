const express = require('express')
const app = express()
const sequelize = require('./database/db')
require('./database/associations')

// Setting
const PORT = process.env.PORT || 3000;

// Midddleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use(require('./routes'));

// Start the server
app.listen(PORT, () => {
  console.log(`App corriendo en puerto http://localhost:${PORT}`)

// Database connection
// force: true DROP TABLES
sequelize.sync({ force: false }).then(()=>{ 
    console.log("Conexión exitosa a la base de datos")
  }).catch(error => {
    console.log("No se pudo conectar a la base de datos", error)
  })
})