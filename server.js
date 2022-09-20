import express  from "express"

const app = express()

app.get('/', function(req, res) {
  res.send('<h1>Howdy!</h1>')
})

app.get('/students', function(req, res) {
  res.send('<h1>Best Students Ever!</h1>')
})

app.listen(3000, function() {
  console.log('Hear ya on port 3000')
})