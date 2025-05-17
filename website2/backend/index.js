const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/university_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const CourseSchema = new mongoose.Schema({
  title: String,
  credits: Number,
});

const Course = mongoose.model('Course', CourseSchema);

app.get('/api/courses', async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

app.listen(5000, () => {
  console.log('University backend running on http://localhost:5000');
});
