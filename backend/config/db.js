const mongoose = require ('mongoose')
const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI , 
            {
                useNewUrlParser : true , 
                useUnifiedTopology : true  , 
                useFindandModify : true 
            }
        )
    } catch (error) {
        
    }
}