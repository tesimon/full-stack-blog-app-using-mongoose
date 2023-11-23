import { Schema, model, models } from "mongoose";
// Define the Comment schema
const CommentSchema = new Schema({
  postComment: String,
  userEmail: String,
  postSlug: String,
  createdAt: { type: Date, default: Date.now },
  user: { type: Schema.Types.ObjectId, ref: "User" },
});

const Comment = models.Comment || model("Comment", CommentSchema);

export default Comment;
