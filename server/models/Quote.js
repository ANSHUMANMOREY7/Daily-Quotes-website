import mongoose from "mongoose";

const QuoteSchema = new mongoose.Schema({
  text: { type: String, required: true },
  author: { type: String, default: "Unknown" }
});

export default mongoose.model("Quote", QuoteSchema);
