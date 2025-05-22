const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UserModel = require('./models/User.js')

const app = express()
app.use(cors())
app.use(express.json())

try{
    mongoose.connect('mongodb+srv://Chellamuthu:Chella%408870@cluster0.2jr99jh.mongodb.net/users')
    console.log("MongoDB connected")
    app.listen(3001,()=> {
        console.log("Server is running on port 3001")
    })
}
catch(err){
    console.log(err)
}
   
app.post('/register',(req,res) => {
    UserModel.create(req.body)
    .then(users => res.json(users))
    .catch(err => res.json(err))
})

app.post('/login',(req,res) => {
    const {email,password} = req.body
    UserModel.findOne({email:email}) 
    .then(user => {
        if(user){
            if(user.password === password){
                res.json({status: 200, data: "true"})
            }
            else{
                res.json({status: 'ok', data: 'Password Incorrect'})
            }
        }
        else{
            res.json({status: 'ok', data:'No Record Found'})
        }
    })
    .catch(err => res.json(err))            
})  


