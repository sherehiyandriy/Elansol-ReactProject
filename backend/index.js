const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const Port = 3000;
const app = express();

app.use(express.json());
app.use(cors());

const EmployeeModel = require('./models/Employee');
mongoose.connect("mongodb://127.0.0.1:27017/Employee");


app.post("/login", (req, res) => {
  const { email, password } = req.body;
  EmployeeModel.findOne({ email: email })
    .then((user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
          if (result) {
            const token = jwt.sign({ email: user.email }, 'your_jwt_secret', { expiresIn: '1h' });
            res.json({ success: true, token: token });
          } else {
            res.json({ success: false, message: "Password is incorrect" });
          }
        });
      } else {
        res.json({ success: false, message: "No record existed" });
      }
    })
    .catch((err) => res.json(err));
});

app.post('/Register', (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hashedPassword) => {
    if (err) return res.json(err);
    EmployeeModel.create({ ...req.body, password: hashedPassword })
      .then(employees => res.json(employees))
      .catch((err) => res.json(err));
  });
});

app.get('/users', (req, res) => {
    EmployeeModel.find({})
        .then(users => res.json(users))
        .catch(err => res.status(500).json({ error: err.message }));
});
app.listen(Port, () => {
  console.log(`Server is running on ${Port}`);
});
