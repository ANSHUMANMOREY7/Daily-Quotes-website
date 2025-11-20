import express from "express";
import Quote from "../models/Quote.js";

const router = express.Router();

// GET all quotes
router.get("/", async (req, res) => {
  const quotes = await Quote.find();
  res.json(quotes);
});

// GET random quote
router.get("/random", async (req, res) => {
  const count = await Quote.countDocuments();
  const random = Math.floor(Math.random() * count);
  const quote = await Quote.findOne().skip(random);
  res.json(quote);
});

// POST new quote
router.post("/add", async (req, res) => {
  const { text, author } = req.body;
  const newQuote = new Quote({ text, author });
  await newQuote.save();
  res.json({ message: "Quote added", quote: newQuote });
});

export default router;
