"use client";

import { fetchingCommentsData } from "@/lib/apis";
import { useSession } from "next-auth/react";
import { useState } from "react";
import useSWR from "swr";
import CommentPosts from "./CommentPosts";

const Comments = ({ postId }) => {
  const postSlug = postId;
  const { data, mutate, isLoading } = useSWR(
    `/api/comments?postId=${postId}`,
    fetchingCommentsData
  );

  const comments = data;

  const { status, data: user } = useSession();

  const [postComment, setpostComment] = useState("");

  const handleSubmit = async () => {
    await fetch("https://thoughtfulperspectives.vercel.app/api/comments", {
      method: "POST",
      body: JSON.stringify({
        postComment,
        postSlug,
        userEmail: user.user.email,
        userId: user.user._id,
      }),
    });
    setpostComment("");
    mutate();
  };
  return (
    <div className="comments flex flex-col  mb-10">
      <h1 className="font-bold font-serif my-5">Comments</h1>
      <div className="input flex mb-16">
        {status === "loading" && <div>Loading.....</div>}
        {status === "authenticated" ? (
          <div className="flex justify-between gap-1 w-[80%]">
            <input
              type="text"
              value={postComment}
              placeholder="say something about this post"
              className="rounded-md  h-[40px] bg-slate-600 px-2 outline-none flex-[80%] w-full text-orange-300"
              onChange={(e) => setpostComment(e.target.value)}
            />
            <button
              type="submit"
              className="bg-teal-600 px-4 py-1 rounded-md"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        ) : (
          <span className="text-orange-400 font-extrabold my-5">
            Login to Comment on this post
          </span>
        )}
      </div>
      {comments?.map((item) => (
        <CommentPosts item={item} key={item._id} />
      ))}
    </div>
  );
};
export default Comments;
