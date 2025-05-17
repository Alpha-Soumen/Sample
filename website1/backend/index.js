const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/travel_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const DestinationSchema = new mongoose.Schema({
  name: String,
  country: String,
});

const Destination = mongoose.model('Destination', DestinationSchema);

app.get('/api/destinations', async (req, res) => {
  const destinations = await Destination.find();
  res.json(destinations);
});

app.listen(4000, () => {
  console.log('Travel backend running on http://localhost:4000');
});
