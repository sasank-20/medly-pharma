import { Router } from "express";

import * as PatientMedicineSchema from "../controllers/PatientsMedicineController.js";

const router = Router();

router.get("/", PatientMedicineSchema.getPatientMedicines);
router.post("/", PatientMedicineSchema.createPatientMedicine);
router.put("/:id", PatientMedicineSchema.updatePatientMedicine);
router.delete("/:id", PatientMedicineSchema.deletePatientMedicine);
router.get("/:id", PatientMedicineSchema.getPatientMedicine);

export default router;