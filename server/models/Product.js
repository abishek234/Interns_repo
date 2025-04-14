import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  heroimage: {
    type: String,
    required: true,
  },
  keyPoints: {
    type: [String],
    default: []
  }
});

export default mongoose.model('Product', productSchema);
