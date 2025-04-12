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
  image: {
    type: [String],
    required: true,
    trim: true,
  },
  heroimage: {
    type: String,
    required: true,
  },
 
});

export default mongoose.model('Product', productSchema);
