// const mongoose = require("mongoose");

// // Define the Account schema
// const AccountSchema = new mongoose.Schema({
//   userId: String,
//   type: String,
//   provider: String,
//   providerAccountId: String,
//   refresh_token: String,
//   access_token: String,
//   expires_at: Number,
//   token_type: String,
//   scope: String,
//   id_token: String,
//   session_state: String,
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
// });

// // Define the Session schema
// const SessionSchema = new mongoose.Schema({
//   sessionToken: { type: String, unique: true },
//   userId: String,
//   expires: Date,
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
// });

// // Define the User schema
// const UserSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, unique: true },
//   emailVerified: Date,
//   image: String,
// });

// // Define the VerificationToken schema
// const VerificationTokenSchema = new mongoose.Schema({
//   token: { type: String, unique: true },
//   expires: Date,
// });

// // Define the Category schema
// const CategorySchema = new mongoose.Schema({
//   title: String,
//   slug: { type: String, unique: true },
//   img: String,
//   posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
// });

// // Define the Post schema
// const PostSchema = new mongoose.Schema({
//   slug: { type: String, unique: true },
//   img: String,
//   title: String,
//   catSlug: String,
//   desc: String,
//   createdAt: { type: Date, default: Date.now },
//   views: { type: Number, default: 0 },
//   cat: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
//   userEmail: String,
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
// });

// // Define the Comment schema
// const CommentSchema = new mongoose.Schema({
//   postComment: String,
//   userEmail: String,
//   createdAt: { type: Date, default: Date.now },
//   user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
//   postSlug: String,
//   post: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
// });

// // Create the models
// const Account =
//   mongoose.models.Account || mongoose.model("Account", AccountSchema);
// const Session =
//   mongoose.models.Session || mongoose.model("Session", SessionSchema);
// const User = mongoose.models.User || mongoose.model("User", UserSchema);
// const VerificationToken =
//   mongoose.models.VerificationToken ||
//   mongoose.model("VerificationToken", VerificationTokenSchema);
// const Category =
//   mongoose.models.Category || mongoose.model("Category", CategorySchema);
// const Post = mongoose.models.Post || mongoose.model("Post", PostSchema);
// const Comment =
//   mongoose.models.Comment || mongoose.model("Comment", CommentSchema);

// module.exports = {
//   Account,
//   Session,
//   User,
//   VerificationToken,
//   Category,
//   Post,
//   Comment,
// };
