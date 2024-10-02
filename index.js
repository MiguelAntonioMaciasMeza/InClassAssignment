// Import the Express module
import express from 'express';
import mongoose from 'mongoose';
import noteRoute from './routes/note.route.js';

const app = express();
const port = 3000;

app.use("/note", noteRoute)

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

const mongoConnect = async () => {
  await mongoose.connect("mongodb://localhost:27017")
  console.log("DB connected")
}

mongoConnect();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
