import mongoose from "mongoose";

async function conectaNaDatabase(){ 
    mongoose.connect(process.env.DB_CONNECTION_STRING);
    return mongoose.connection;
}
//mongodb+srv://admin:admin123@cluster0.d5tp5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0   ///189.10.224.133

export default conectaNaDatabase;