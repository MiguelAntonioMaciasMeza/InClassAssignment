// Import the Express module
import express from 'express';
import mongoose from 'mongoose';

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.post('/abc', (req, res) => {
  const someText = req.body;
  // do something with new text
  res.json({
    message: 'Successfully updated text',
  });
});

const mongoConnect = async () => {
  await mongoose.connect("mongodb://localhost:27017")
  console.log("DB connected")
}

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
