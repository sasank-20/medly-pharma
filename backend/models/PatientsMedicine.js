import mongoose from "mongoose";

const PatientMedicineSchema = mongoose.Schema({
  patient: {
    type: mongoose.Types.ObjectId,
    ref: "Patients",
    required: true,
  },
  medicine: {
    type: mongoose.Types.ObjectId,
    ref: "Requests",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  // merchant: {
  //   type: mongoose.Types.ObjectId,
  //   ref: "Merchants",
  //   required: true,
  // },
  users: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  paymentStatus: {
    type: String,
    default: "Pending",
  },
  paymentDate: {
    type: Date,
    default: new Date(),
  },

  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const PatientMedincine = mongoose.model(
  "PatientMedincine",
  PatientMedicineSchema
);

export default PatientMedincine;
