import mongoose from "mongoose";
import dotenv from "dotenv/config"

const url = process.env.DATABASE_URL

mongoose.connect(url)

const db = mongoose.connection

export default db