var express = require('express')
var router = express.Router()
var queries = require('../db/queries');


router.get('/', function(req, res){
  queries.getUsers()
  .then(users => {
    res.json(users)
  })
})

router.get('/:id', (req, res) =>{
  queries.getUserById(req.params.id)
  .then(rez =>{
    res.json(rez)
  })
})

router.post('/users', (req,res)=>{
  queries.createUser(req.body)
  .then(users => {
    res.json(users)
  })
})

router.put('/users/:id', (req,res) =>{
  queries.update(req.params.id, req.body)
  .then(users =>{
    res.json(users)
  })
})

router.delete('/users/:id', (req, res) =>{
  queries.deleteUser(req.params.id)
  .then(users =>{
    res.json(users)
  })
})
module.exports = router
