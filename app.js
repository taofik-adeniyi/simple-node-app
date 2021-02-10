const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hello Ielriayo</h1>')
})

const PORT = 3500

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`)
})