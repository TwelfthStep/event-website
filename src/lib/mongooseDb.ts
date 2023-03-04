import mongoose, { Mongoose } from "mongoose";
import { GlobalRef } from "./globalRef";

const dbRef = new GlobalRef<Mongoose>('mongooseDb');
if(!dbRef.value){
  mongoose.set('strictQuery', true);
  mongoose.connect(`${process.env.MONGO_URL}/${process.env.MONGO_DATABASE}`, {
    authSource: process.env.MONGO_AUTH_SOURCE,
    user: process.env.MONGO_USER,
    pass: process.env.MONGO_PASSWORD
  }).then(() => {
    console.log('👍 Database connected.');
  }).catch(error => {
    console.log('❌ Database failed to load. See error:');
    console.error(error);
    process.exit();
  });

  dbRef.value = mongoose;
}

export const mongooseDb = dbRef.value;