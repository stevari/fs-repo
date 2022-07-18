const { response } = require('express');
const express = require('express')
const bp = require("body-parser")
const app = express()
const dateObj = new Date();
let nums = [
    {
      id: 1,
      name: "Arto Hellas",
      number: "040-123456",
    },
    {
      id: 2,
      name: "Ada Lovelace",
      number: "39-44-5323523",
      
    },
    {   
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345",
      
    },
    {   
        id: 4,
        name: "Mary Poppendieck",
        number: "39-23-6423122",
      
    }
  ]
  const sum = nums.length
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  app.use(bp.json())
  app.use(bp.urlencoded({ extended: true }))

  app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>')
  })

  app.get('/persons/:id',(req,res) => {
    const id = req.params.id
    const person = nums.find(p => p.id==id)
    if(person){
      res.send(person)
    }else{
      res.status(404).end()
    }
  })

  app.get('/persons', (req, res) => {
    res.json(nums)
  })

  app.get('/info', (req, res) => {
    
    res.send(
        `<div>
        <p>
        Phonebook has info for ${sum} people.
         </p>
        ${dateObj.toDateString()} ${dateObj.toTimeString()}
        </div>
        `
    )
  })

  app.delete('/persons/:id',(req,res) =>{
    const id = Number(req.params.id)
    nums = nums.filter(person => person.id !== id)

    res.status(204).end()
  })

  app.post('/persons/',(req,res) => {
    const id = getRandomInt(nums.length+1,nums.length+1)
    const body = req.body
    if(!body){
      console.log(body)
      return res.status(400).json({
        error: "content missing"
      })
      
    }else if(body.name==""){
      return res.status(400).json({
        error: "name missing"
      })

    }else if(body.num==""){
      return res.status(400).json({
        error: "name missing"
      })
    }else if(nums.some(person => person.name ===body.name)){
      return res.status(400).json({
        error: "name must be unique"
      })

    
  }else{
      const person ={
        id:id,
        name:body.name,
        num: body.num
  
      }
      //console.log(person)
      nums = nums.concat(person)
      //console.log(nums)
  
      res.json(person)
      
    }

  })
  
  const PORT = 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })