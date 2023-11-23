import { Schema, model, models } from "mongoose";
// Define the User schema
const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  emailVerified: Date,
  image: String,
  comments: { type: Schema.Types.ObjectId, ref: "Comment" },
});
// Define the Session schema
const User = models.User || model("User", UserSchema);

export default User;
