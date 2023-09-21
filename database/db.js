import mongoose from "mongoose";

import dotenv from 'dotenv'
dotenv.config();

const Connection = () => {
    const DB_URI = `mongodb://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@ac-iygfilk-shard-00-00.san5ngz.mongodb.net:27017,ac-iygfilk-shard-00-01.san5ngz.mongodb.net:27017,ac-iygfilk-shard-00-02.san5ngz.mongodb.net:27017/?ssl=true&replicaSet=atlas-fi26qu-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        mongoose.connect(DB_URI, { useNewUrlParser: true });
        console.log('====================================');
        console.log(`Database is connected`);
        console.log('====================================');
    } catch (error) {
        console.log('====================================');
        console.log(`This the error ${error.message}`);
        console.log('====================================');
    }
}

export default Connection;