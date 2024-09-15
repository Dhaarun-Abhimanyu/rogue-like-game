const express = require('express')
const app = express()

require('dotenv').config()

app.get('/', (req,res) => {
    res.status(200).send('It works!')
})

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`)
})