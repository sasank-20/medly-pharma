import mongoose from "mongoose";
import PatientMedicine from "../models/PatientsMedicine.js";

export const getPatientMedicines = async (req, res) => {
  try {
    const patientMedicines = await PatientMedicine.find();
    res.status(200).json(patientMedicines);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createPatientMedicine = async (req, res) => {
  const patientMedicine = req.body;
  const newPatientMedicine = new PatientMedicine(patientMedicine);
  try {
    await newPatientMedicine.save();
    res.status(201).json(newPatientMedicine);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePatientMedicine = async (req, res) => {
  const { id: _id } = req.params;
  const patientMedicine = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No Medicine with that id");

  try {
    const updatePatientMedicine = await PatientMedicine.findByIdAndUpdate(
      _id,
      { ...patientMedicine, _id },
      { new: true }
    );

    res.status(200).json(updatePatientMedicine);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const deletePatientMedicine = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Medicine with that id");

  try {
    await PatientMedicine.findByIdAndRemove(id);
    res.json({ message: "Medicine deleted successfully." });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const getPatientMedicine = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send("No Medicine with that id");

  try {
    const patientMedicine = await PatientMedicine.findById(id);
    res.status(200).json(patientMedicine);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
