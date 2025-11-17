import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: String,
  age: Number,
  symptoms: String,
  summary: String,
  doctor: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model("Patient", patientSchema);
