import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    isAdmin: Boolean
  });
  
  export default mongoose.model('User', UserSchema);