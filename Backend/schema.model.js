import mongoose from 'mongoose';

// user Schema created here
const userSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profile_photo: {
        type: String,
        default: null
    },
    gender: {
        type: String,
        require: true,
    }
});

// userModel Created Here
const User = mongoose.model('users', userSchema);



export { User };
