const express = require('express')
const app = express()
const port = process.env.port || 3000;

app.get('/', (req, res) => {
    res.status(200).send('Everything is OOOOOOOOOOOOK...')
})

app.listen(port, () => {
    console.log('running on ' + port)
})