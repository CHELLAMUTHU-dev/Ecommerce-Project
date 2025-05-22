const User = require('../models/User');
const bcrypt = require('bcrypt');

exports.uploadUser = async (req,res)=>{
    console.log(req.body);  
    try{
    const { name, email, password } = req.body;
    const hashedPassword =  bcrypt.hash(password, 'My_Secret', 10);
    const user = new User({
        name: name,
        email: email,
        password: hashedPassword
    });
    await user.save();
    res.status(201).json({ message: 'User created successfully' });
}catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Internal server error' });
  } 
}


exports.getUser = async (req,res)=>{
    try{
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.status(200).json(user);
    }
    catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ message: 'Internal server error' });
    }   
} 

