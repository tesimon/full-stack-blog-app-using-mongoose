import { Schema, model, models } from "mongoose";
// Define the User schema
const UserSchema = new Schema({
  name: String,
  email: { type: String, unique: true },
  emailVerified: Date,
  image: String,
  sessions: { type: Schema.Types.ObjectId, ref: "Session" },
  posts: { type: Schema.Types.ObjectId, ref: "Post" },
  comments: { type: Schema.Types.ObjectId, ref: "Comment" },
});
// Define the Session schema
const User = models.User || model("User", UserSchema);

export default User;
