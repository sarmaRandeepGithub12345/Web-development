import userModel from "../models/model.js"
import bcrypt from 'bcrypt'
class userController {

    static getRegistration = (req, res) => {
        res.render('registration', { title: 'Registration Page' })
    }

    static getLogin = (req, res) => {
        res.render('login', { title: 'Login Page' })
    }
    static getHome = (req, res) => {
        res.render('home', { title: 'Home Page' })
    }
    static postRegistration = async (req, res) => {
        const passw = await bcrypt.hash(req.body.password, 10)
        try {
            const doc = new userModel({
                name: req.body.name,
                age: req.body.age,
                fees: req.body.fees,
                email: req.body.email,
                password: passw
            })
            const result = await doc.save()
            console.log(result)
            res.redirect('/login')
        } catch (error) {
            console.log(error)
        }
    }
    static postLogin = async (req, res) => {
        const result = await userModel.find({ email: req.body.email })
        let isMatch = 0;
        
        try {
            if (result.length>0) {
                isMatch = await bcrypt.compare(req.body.password, result[0]["password"]);
                if (isMatch)
                    res.redirect('/home')
                else
                    res.send('Your password is wrong')

            } else
                res.send('User not found')

        } catch (error) {
            console.log(error)
        }
    }

}

export default userController

