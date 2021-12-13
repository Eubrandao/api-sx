const express = require('express')
const app = express()
const apiSx = require('./models/ApiModel')
const connectDb = require('./middlewares/connectDb')
const cors = require('cors')
require('dotenv').config()

app.use(cors())

const PORT = process.env.PORT
app.listen(PORT, ()=>{
    console.log('server is on 3001 port')
})



app.get('/', (req, res)=>{
    res.status(200).json({msg: 'Bem vindo, vá para a rota LIST'})
})

app.get('/list/:id', async(req,res)=>{
    const _id = req.params.id
   
    const result = await apiSx.findById({_id})
    res.json(result)
})

 app.get('/list', async (req, res)=>{
    const result = await apiSx.find({})
    res.json(result)
 })
 


 module.exports = connectDb()