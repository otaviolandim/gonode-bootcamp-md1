const express = require('express')

const routes = express.Router()
const checkParams = require('./middlewares/middlewaresOpt')

routes.get('/', (req, res) => {
  return res.render('start')
})

routes.post('/check', (req, res) => {
  const { age } = req.body

  if (age >= 18) {
    return res.redirect(`/major?age=${age}`)
  }
  return res.redirect(`/minor?age=${age}`)
})

routes.get('/major', checkParams, (req, res) => {
  const { age } = req.query

  return res.render('major', { age })
})

routes.get('/minor', checkParams, (req, res) => {
  const { age } = req.query

  return res.render('minor', { age })
})

module.exports = routes
