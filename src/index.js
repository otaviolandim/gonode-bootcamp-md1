const express = require('express')
const nunjucks = require('nunjucks')

const app = express()

nunjucks.configure('src/views', {
  autoescape: true,
  express: app,
  watch: true
})

app.set('view engine', 'njk')
app.use(express.urlencoded({ extended: false }))
app.use(require('./routes'))

app.listen(3000, () => {
  console.log('Servidor rodando...')
})
