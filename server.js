import mongoose from 'mongoose';
import dotenv from 'dotenv';

import app from "./app.js";

// const app = require('./app')

const { DB_HOST, PORT } = process.env;

dotenv.config();

mongoose.connect(DB_HOST).then(() => {
  app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`)
})
}).catch(error => console.log(error.message))


