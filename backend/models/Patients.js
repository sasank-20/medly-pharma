import mongoose from "mongoose";

const patientSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Patient = mongoose.model("Patient", patientSchema);

export default Patient;
