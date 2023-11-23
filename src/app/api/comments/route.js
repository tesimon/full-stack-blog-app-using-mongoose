import comments from "@/models/Comments";
import ConnectDb from "@/utils/database";

export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const postId = searchParams.get("postId");

  try {
    await ConnectDb();
    const comment = await comments
      .find()
      .where({ ...(postId && { postSlug: postId }) })
      .populate("user");

    return new Response(JSON.stringify(comment), { status: 200 });
  } catch (err) {
    return new Response(
      JSON.stringify(
        { messege: "failed to fetch comments from db" },
        { status: 500 }
      )
    );
  }
};

export const POST = async (req) => {
  const { postSlug, postComment, userEmail, userId } = await req.json();

  if (!userEmail) {
    return;
  }
  try {
    const comment = await comments.create({
      postSlug,
      postComment,
      userEmail,
      user: userId,
    });
    return new Response(JSON.stringify(comment), { status: 200 });
  } catch (error) {
    console.log(error, "there was something wrong while posting the comment");
    return new Response(
      JSON.stringify(
        { messege: "failed to post the comment to the db" },
        { status: 500 }
      )
    );
  }
};
