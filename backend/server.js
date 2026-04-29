const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");
const app = express();
app.use(cors());
app.use(express.json());
let customers = [];
app.get("/customers", (req, res) => res.json(customers));
app.post("/customers", (req, res) => {
  const { name, email, phone } = req.body;
  const newCustomer = { id: uuidv4(), name, email, phone };
  customers.push(newCustomer);
  res.status(201).json(newCustomer);
});
app.delete("/customers/:id", (req, res) => {
  customers = customers.filter((c) => c.id !== req.params.id);
  res.json({ message: "Deleted" });
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running ${PORT}`));
