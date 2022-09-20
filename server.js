import express  from "express"

const app = express()

app.get('/', function(req, res) {
  res.send('<h1>Howdy!</h1>')
})

app.get('/students', function(req, res) {
  res.send('<h1>Best Students Ever!</h1>')
})

app.get('/test', function(req, res) {
  res.send('<p>No one loves tests!</p>')
})

app.listen(3000, function() {
  console.log('Hear ya on port 3000')
})