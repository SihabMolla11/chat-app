import mongoose from 'mongoose';

const connectToMongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_DB_URL)
        console.log("connect with mongodb successful");
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

export default connectToMongodb;