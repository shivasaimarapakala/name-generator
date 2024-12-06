const express = require('express')
const app = express()

const port = 9000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/about-us', (req, res) => {
  res.send('About Us')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

