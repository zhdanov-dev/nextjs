import mongoose from 'mongoose';

const connectMongo = async () => {mongoose.connect(process.env.MONGO_URL); console.log('connected to db.')}

export default connectMongo;
