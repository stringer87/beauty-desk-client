const express = require('express');
const app = express()
const port = 5252

const { db } = require('../database')

app.get('/', (req, res) => {
  res.status(200).send('connected')
})


app.listen(port, () => { })