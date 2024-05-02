import userModels from "../models/userModels.mjs";
import userService from '../services/userService.mjs'

const userSignUp = async (req,res)=>{
    const activity = 'User SignUp'
    // use try catch
    // check all the fields
    // validator package to validate the things
    

    try {
        
        const {
            name = '',
            email = '',
            password = '',
            mobile = ''
        } = req.body || {}

        // validate all the fields
        if(!mobile){
            res.status(400).send({
                status : false,
                message : 'Mobile is mandatory'
            })
        }
        if(!name){
            res.status(400).send({
                status : false,
                message : "Name is mandatory"
            })
        }
        if(!email){
            res.status(400).send({
                status : false,
                message : "Email is mandatory"
            })
        }
        if(!password){
            res.status(400).send({
                status : false,
                message : "Password is mandatory"
            })
        }

        // controll to service function

        const data = await userService.userSignUp()
        res.status(201).send({
            status : true,
            data 
        })
    }
    catch(error) {
        console.log(`Error in ${activity} - ${error?.message || error}`)
        res.status(500).send({
            status : false,
            message : `Error in ${activity} - ${error?.message || error}`
        })
    }
}

const userSignIn = async (req,res) => {
    const activity = "User SignIn";

    try {
        const {
            name = '',
            username = '',
            mobile = '',
            email = '',
            password = ''
        } = req.body || {};

        if(!name){
            res.status(400).send({
                status : false,
                message : "Name is mandatory"
            })
        }
        if(!username){
            res.status(400).send({
                status : false,
                message : 'User Name is mandatory'
            })
        }
        if(!mobile){
            res.status(400).send({
                status : false,
                message : 'Mobile is mandatory'
            })
        }
        if(!email){
            res.status(400).send({
                status : false,
                message : "Email is mandatory"
            })
        }
        if(!password){
            res.status(400).send({
                status : false,
                message : "Password is mandatory"
            })
        }

        const data = await userService.userSignIn();
        res.status(201).send({
            status : true,
            data
        })

    } catch (error) {
        console.log(`Error in ${activity} - ${error?.message || error}`);
        res.status(500).send({
            status : false,
            message : `Error in ${activity} - ${error?.message || error}`
        })
    }
}

const post = async (req, res) => {
    const activity = "User Create Post";
    
    try {
        const {
            title = '',
            content = '',
            author = ''
        } = req.body || {}

        if(!title) {
            res.status(400).send({
                status : false,
                message : 'Title is mandatory'
            })
        }
        if(!content) {
            res.status(400).send({
                status : false,
                message : 'Content is mandatory'
            })
        }
        if(!author) {
            res.status(400).send({
                status : false,
                message : 'Author is mandatory'
            })
        }

        const data = await userService.post();
        res.status(201).send({
            status : true,
            data
        })

    } catch (error) {
        console.log(`Error in ${activity} - ${error?.message || error}`);
        res.status(500).send({
            status : false,
            message : `Error in ${activity} - ${error?.message || error}`
        })
    }
}

export {userSignUp, userSignIn, post}