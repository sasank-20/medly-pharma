import mongoose from "mongoose";

const requestSchema = mongoose.Schema({
  medicine: {
    type: mongoose.Types.ObjectId,
    ref: "Medicines",
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
  totalQuantity: {
    type: Number,
    required: true,
  },
  // merchant: {
  //   type: mongoose.Types.ObjectId,
  //   ref: "Merchants",
  //   required: true,
  // },
  // supplier: {
  //   type: mongoose.Types.ObjectId,
  //   ref: "Suppliers",
  //   required: true,
  // },
  merchantUsers: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  supplierUsers: {
    type: mongoose.Types.ObjectId,
    ref: "Users",
    required: true,
  },
  status: {
    type: String,
    default: "Pending",
  },
  paymentStatus: {
    type: String,
    default: "Pending",
  },
  paymentDate: {
    type: Date,
    default: new Date(),
  },
  replace: {
    type: Boolean,
    default: false,
  },
  replaceDate: {
    type: Date,
    default: new Date(),
  },
  replaceStatus: {
    type: String,
    default: "Pending",
  },

  // replacePaymentStatus: {
  //     type: String,
  //     default: "Pending",
  // },
  // replacePaymentDate: {
  //     type: Date,
  //     default: new Date(),
  // },
  // replaceReason: {
  //     type: String,
  //     default: "",
  // },
  // replaceQuantity: {
  //     type: Number,
  //     default: 0,
  // },
  // replacePrice: {
  //     type: Number,
  //     default: 0,
  // },
  // replaceMerchant: {
  //     type: mongoose.Types.ObjectId,
  //     ref: "Merchants",
  //     default: null,
  // },
  // replaceSupplier: {
  //     type: mongoose.Types.ObjectId,
  //     ref: "Suppliers",
  //     default: null,
  // },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Request = mongoose.model("Request", requestSchema);

export default Request;
