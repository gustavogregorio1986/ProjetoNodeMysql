const express = require('express')

const app = express('/', (req, res) => {
    res.send('This is express')
})

module.exports = app;