import express from "express";
import books from "./data/booksData.json" with { type: 'json' };
import cars from "./data/carsData.json" with { type: 'json' };
import users from "./data/usersData.json" with { type: 'json' };


const app = express();

app.get("/books", (req, res) => res.json(books));
app.get("/cars", (req, res) => res.json(cars));
app.get("/users", (req, res) => res.json(users));

app.listen(3000, () => console.log("Server running on port 3000"));
