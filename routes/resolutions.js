var express = require('express')
var router = express.Router()
var queries = require('../db/queries');

router.get('/', function(req, res){
  queries.getResolutions()
  .then(resolutions => {
    res.json(resolutions)
  })
})

router.get('/:id', (req, res) =>{
  queries.getRezById(req.params.id)
  .then(rez =>{
    res.json(rez)
  })
})

router.post('/rez', (req,res)=>{
  queries.newResolution(req.body)
  .then(rez => {
    res.json(rez)
  })
})

router.put('/rez/:id', (req,res) =>{
  queries.updateRez(req.params.id, req.body)
  .then(rez =>{
    res.json(rez)
  })
})

router.delete('/rez/:id', (req, res) =>{
  queries.deleteRez(req.params.id)
  .then(rez =>{
    res.json(rez)
  })
})


module.exports = router
