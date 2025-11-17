import Patient from "../models/Patient.js";

export const createPatient = async (req, res) => {
  try {
    const { name, age, symptoms } = req.body;

    const summary = `Patient ${name} (Age ${age}) is experiencing symptoms: ${symptoms}.`;

    let doctor = "General Physician";

    if (symptoms.toLowerCase().includes("chest")) doctor = "Cardiologist";
    if (symptoms.toLowerCase().includes("skin")) doctor = "Dermatologist";
    if (symptoms.toLowerCase().includes("eye")) doctor = "Eye Specialist";
    if (symptoms.toLowerCase().includes("fever")) doctor = "General Physician";
    if (symptoms.toLowerCase().includes("bone")) doctor = "Orthopedic";

    const patient = await Patient.create({
      name,
      age,
      symptoms,
      summary,
      doctor,
    });

    res.json(patient);

  } catch (err) {
    res.status(500).json({ error: "Error" });
  }
};
