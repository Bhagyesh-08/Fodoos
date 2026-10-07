import mongoose from "mongoose";

export const connectDB = async () => {
    const uri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/foodos";

    try {
        await mongoose.connect(uri);
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error.message);
        process.exit(1);
    }
};