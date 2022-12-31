const express = require("express");
const cores = require("cors");
const pool = require("./db");
const app = express();

// middleware
app.use(cors());
app.use(express.json());

// routes

// create a customer
app.post("/customer", async (req, res) => {
    try {
        console.log(req.body);
    } catch (error) {
        console.log(error.message);
    }
});

// get all customers

// update a customer

// delete a customer

app.listen(3001, () => {
    console.log("server has started on port 3001");
});
