const express =  require('express')
const dotenv = require('dotenv').config()
const port = process.env.PORT || 5000
const goalRoutes = require('./routes/goalRoutes')

const app = express()

app.use('/api/goals', goalRoutes)
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.listen(port, ()=> {
    console.log(`the server is running on ${port}`)
})


