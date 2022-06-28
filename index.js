const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('Everything is OOOOOOOOOOOOK...')
})

app.listen(3000, () => {
    console.log('running...')
})