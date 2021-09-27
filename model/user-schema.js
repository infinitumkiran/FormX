import mongoose, {mongo} from 'mongoose';

const userSchema = mongoose.Schema({
    name: String, 
    username: String, 
    email: String, 
    phone: Number
});

const user = mongoose.model('user',userSchema);
export default user;
