import mongoose, { model } from "mongoose";

const exampleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Test", exampleSchema);
