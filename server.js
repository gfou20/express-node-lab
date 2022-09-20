import express  from "express"

import { students } from "./data/student-data.js"

const app = express()

app.set('view engine', 'ejs')

app.get('/', function(req, res) {
  res.redirect('/students')
})

app.get('/students', function(req, res) {
  res.render('students/index', {
    students: students
  })
})

app.get('/test', function(req, res) {
  res.send('<p>No one loves tests!</p>')
})

app.listen(3000, function() {
  console.log('Hear ya on port 3000')
})