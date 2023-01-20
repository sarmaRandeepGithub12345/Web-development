import express from 'express'

//to process the request body
import bodyParser from 'body-parser'
import mongoose from 'mongoose'

//for cross origin request
import cors from 'cors'

import dotenv from 'dotenv'

import multer from 'multer'

//for requests safety
import helmet from 'helmet'

//for login
import morgan from 'morgan'

//These two will help us set the path when we configure directories 
import path from 'path'
import { fileURLToPath } from 'url'

import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'

import {register } from "./controllers/auth.js"
import {createPost} from './controllers/posts.js'
import { verifyToken } from './middleware/auth.js'

import User from './models/User.js'
import Post from './models/Post.js'

import { users,posts } from './data/index.js'

/* CONFIGURATION */

//fileURLToPath - decodes the file URL to a path string
//import.meta - The import.meta meta-property exposes context-specific metadata to a JavaScript module. It contains information about the module, such as the module's URL.
const __filename = fileURLToPath(import.meta.url)//used to grab filr url

//  D:/testing FUllstack project\5-social media\backend>
const __dirname = path.dirname(__filename)


dotenv.config()
const app =express()

// parses incoming requests with JSON payloads and is based on body-parser.
app.use(express.json())

//Helmet helps you secure your Express apps by setting various HTTP headers.
app.use(helmet())

app.use(helmet.crossOriginResourcePolicy({policy:"cross-origin"}))

//use to log some special data like url,type of request
app.use(morgan("common"))

app.use(bodyParser.json({limit:"30mb" ,extended: true}))

app.use(bodyParser.urlencoded({limit:"30mb" ,extended:true}))

//invoking cross origin resource sharing policies
app.use(cors())

//set the directory of where we keep our assets
app.use("/assets",express.static(path.join(__dirname,'public/assets')))

/* FILE STORAGE */ 
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
       cb(null,"public/assets")
    },
    filename: (req,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload = multer({storage})

/* routes with files */
app.post("/auth/register",upload.single("picture"),register)
app.post("/posts",verifyToken,upload.single("picture"),createPost)

/*Routes */
app.use("/auth",authRoutes)
app.use("/users",userRoutes)
app.use("/posts",postRoutes)


/* Mongoose setup */
const PORT = process.env.PORT || 6001

mongoose.set('strictQuery',true)

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser : true,
    useUnifiedTopology : true
}).then(()=>{
app.listen(PORT,()=>console.log(`Server Port: ${PORT}`));

  /* Add data one time */  
//User.insertMany(users);
//Post.insertMany(posts);

}).catch(error => console.log(error))
