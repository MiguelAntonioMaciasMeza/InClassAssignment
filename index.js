// Import the Express module
import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const mongoConnect = async () => {
  await mongoose.connect("mongodb://localhost:27017")
  console.log("DB connected")
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
