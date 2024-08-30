import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'

const signup = async (req, res)=>{

    try {
        const {fullname, email, password} = req.body
       const user = await User.findOne({email});
       
       if(user){
            return res.status(400).json({message: "user already exists."});
       }

       const hashPassword = await bcryptjs.hash(password,10);

       const userCreated =  new User({
        fullname: fullname,
        email: email,
        password: hashPassword
       });

       await userCreated.save();

       res.status(201).json({message: "user created successfully.", user:{
        id: userCreated.id,
        fullname: userCreated.fullname,
        email: userCreated.email
       }})

    } catch (error) {
        
        console.log(error);
        res.status(500).json({message: "internal server error."})
    }

}


const login = async (req,res)=>{

    try {
        const {email, password} = req.body;
        var user = await User.findOne({email});
        const  passwordMatch = await bcryptjs.compare(password, user.password);
        if(!user || !passwordMatch){
           return  res.status(400).json({message: 'invalid email or password.'});
        }

        res.status(200).json({message:"user logged in successfully.", user:{
            id: user.id,
            fullname: user.fullname,
            email: user.email
        }})

    } catch (error) {
        console.log("Error: " + error.message);
        console.log("User" + user);
        res.status(500).json({message: "User does not exist"})
    }
}

export default {signup, login};