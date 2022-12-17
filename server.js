import mongoose from "mongoose";

// Connection URL
const url =
  "mongodb+srv://myapi42:U41Fn2W431WWZNS0@myapi42.5cd1oiy.mongodb.net/?retryWrites=true&w=majority";

export const connection = async () => {
  const conn = await mongoose.createConnection(url).asPromise();
  if (conn.readyState === 1) {
    console.log("connected");
  }
};

connection();

const exampleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});

const Model = mongoose.model("Test", exampleSchema);

run();
async function run() {
  const user = new Model({ name: "HARUN" });
  await user.save();
}
