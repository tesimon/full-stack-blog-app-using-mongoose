import { Schema, model, models } from "mongoose";
// Define the Post schema
const PostSchema = new Schema({
  slug: { type: String, unique: true },
  img: String,
  title: String,
  catSlug: String,
  desc: String,
  userEmail: String,
  createdAt: { type: Date, default: Date.now },
  views: { type: Number, default: 0 },
  cat: { type: Schema.Types.ObjectId, ref: "Catagory" },
  creator: { type: Schema.Types.ObjectId, ref: "User" },
  comments: { type: Schema.Types.ObjectId, ref: "Comment" },
});

const Post = models.Post || model("Post", PostSchema);

export default Post;
