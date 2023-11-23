import { Schema, model, models } from "mongoose";

// Define the Session schema
const Session = new Schema({
  sessionToken: { type: String, unique: true },
  userId: String,
  expires: Date,
  user: { type: Schema.Types.ObjectId, ref: "users" },
});

const userSession = models.Session || model("Session", Session);

export default userSession;
