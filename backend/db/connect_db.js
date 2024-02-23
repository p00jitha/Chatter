import mongoose from 'mongoose'
const connectdatabase = async()=>{
    try{
      await mongoose.connect(process.env.DB_URL);
      console.log('connected to database')
    }
    catch(err)
    {
        console.log(err)
    }
}
export default connectdatabase;