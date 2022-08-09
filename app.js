const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const mongoose = require('mongoose')
const router = require('./routes/router')

mongoose.connect('mongodb://localhost:27017/api_web_tech_assignment')
.then(()=>console.log('DataBase Connected'))

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.set('view engine','ejs')
app.set('views','views');
app.use(router)
app.get('/',(req,res)=>{
    res.send('This is Base Page')
})

app.listen(port , ()=>{
    console.log('Server connected at port ' , port)
})