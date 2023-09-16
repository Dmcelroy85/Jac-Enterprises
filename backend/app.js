const express = require('express')
const cors = require('cors')
const team = require('./routes/team/team')
const users = require('./routes/users/users')
const app = express()
const port = 3000

app.use(express.json());

app.use('/team', team)
app.use('/users', users)
app.get('/', (req, res) => {
  res.send('Server is Alive')
})

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})