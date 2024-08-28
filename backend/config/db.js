const mongoose = require ('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const connectDB = async ()=>{
    try { console.log(process.env.MONGO_URI)
        const conn = await mongoose.connect(process.env.MONGO_URI , 
           
        )
        console.log(`connection is made   .. . ${conn.connection.host}`)
    } catch (error) {
        console.log( `Error , ${error.message  }`)
        process.exit()

    }
   
}
module.exports = connectDB