var express = require('express')
var app = express()
var exphbs = require('express-handlebars')


//app.get('/', function (req, res) {
  //res.send('Hello World!')
//})

app.engine('.hbs', exphbs({
  extname: '.hbs',
  defaultLayout: 'main'
}))

app.set('view engine', '.hbs')

app.use(express.static('public'))

require('./controllers/toDoController.js')(app)
app.listen(3000)