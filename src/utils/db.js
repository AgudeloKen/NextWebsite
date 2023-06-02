import mongoose, { mongo } from "mongoose";

const connect = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI)
    } catch (error) {
        throw new Error("Connection failed.")
    }
}

export default connect;