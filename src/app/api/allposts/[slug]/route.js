import Post from "@/models/Posts";
import ConnectDb from "@/utils/database";
export const GET = async (req, { params }) => {
  const { slug } = params;

  try {
    await ConnectDb();
    const post = await Post.findByIdAndUpdate(slug, {
      $inc: { views: 1 },
    });
    return new Response(JSON.stringify(post, { status: 200 }));
  } catch (err) {
    return new Response(
      JSON.stringify(
        { messege: "failed to fetch single post from db" },
        { status: 500 }
      )
    );
  }
};
