// Import the Express module
import express from 'express';
import mongoose from 'mongoose';
import noteRoute from './routes/note.route.js';

const app = express();
const port = 3000;

app.use(express.json())
app.use("/note", noteRoute)


// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

// app.post('/abc', (req, res) => {
//   const someText = req.body;
//   // do something with new text
//   res.json({
//     message: 'Successfully updated text',
//   });
// });

const mongoConnect = async () => {
  await mongoose.connect("mongodb://localhost:27017")
  console.log("DB connected")
}

mongoConnect();

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
