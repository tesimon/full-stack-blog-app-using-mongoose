import ConnectDb from "@/utils/database";
import Post from "@/models/Posts";
export const GET = async (req) => {
  const { searchParams } = new URL(req.url);
  const pageNumb = searchParams.get("page");
  const pageNumbs = parseInt(pageNumb) || 1;
  const cat = searchParams.get("cat");
  try {
    await ConnectDb();
    const allposts = await Post.find().populate("creator");
    const filteredposts = await Post.find()
      .skip((pageNumbs - 1) * 2)
      .limit(2)
      .where({ ...(cat && { catSlug: cat }) })
      .populate("creator");
    const count = await Post.countDocuments();

    return new Response(JSON.stringify({ allposts, filteredposts, count }), {
      status: 200,
    });
  } catch (err) {
    console.log(err);
    return new Response(
      JSON.stringify(
        { messege: "failed to fetch all the posts from db" },
        { status: 500 }
      )
    );
  }
};
//inserting posts to db
export const POST = async (req) => {
  const { catSlug, slug, title, desc, img, userEmail, userId } =
    await req.json();
  try {
    await ConnectDb();
    const allposts = await Post.create({
      slug,
      title,
      desc,
      img,
      catSlug,
      userEmail,
      creator: userId,
    });

    return new Response(JSON.stringify(allposts, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new Response(
      JSON.stringify(
        { messege: "failed to fetch all the posts from db" },
        { status: 500 }
      )
    );
  }
};
