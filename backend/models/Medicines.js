import mongoose from "mongoose";

const medicineSchema = mongoose.Schema({
  name: String,
  description: String,
  price: Number,
  // quantity: Number,
  image: String,
  category: String,
  expiryDate: {
    type: Date,
  },
  // supplier: {
  //   type: mongoose.Types.ObjectId,
  //   ref: "Suppliers",
  //   required: true,
  // },
  users: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
  merchant: {
    type: Array,
    default: [],
  },
});

const Medicine = mongoose.model("Medicine", medicineSchema);

export default Medicine;
