const express = require('express')
const app = express()
const port = process.env.PORT;

// app.get('/', (req, res) => {
//     res.status(200).send('Everything is OOOOOOOOOOOOK...')
// })

app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html')
})

app.listen(port, () => {
    console.log('Server running on ' + port)
})