const express = require('express');
const app = express();
app.use(express.json());

let bills = [];

// GET endpoint to retrieve a list of medical bills
app.get('/items', (req, res) => {
  return res.json(bills);
});

// POST endpoint to create a new medical bill
app.post('/items', (req, res) => {
  const bill = req.body;
  bills.push(bill);
  return res.json({ message: 'Medical bill created successfully.' });
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

