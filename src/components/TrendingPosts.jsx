import Image from "next/image";
import Link from "next/link";

const TrendingPosts = ({ posts }) => {
  const trendingPosts = posts?.sort((a, b) => b.views - a.views)?.slice(0, 3);

  return (
    <div className="sm:block ">
      {trendingPosts?.map((post) => (
        <div className="flex  flex-col  justify-start  mb-5" key={post._id}>
          <div className="flex items-center gap-2">
            <div className="images self-baseline flex-[30%] ">
              <Image
                src={post.img || "/assets/tech-keyboard.jpg"}
                width={200}
                height={200}
                className="rounded-md aspect-auto"
                alt=""
              />
            </div>
            <div className="texts flex flex-col flex-[70%] gap-1">
              <Link href={`/blog/${post._id}`}>
                <h5 className="text-teal-600  sm:text-[13px]">{post.title}</h5>
              </Link>
              <div className="flex  items-center gap-1 ">
                <p className="text-slate-500 text-[10px]">
                  Author: {post?.creator?.name || "anonymous"}
                </p>

                <div className="w-[0.5px] h-[15px] bg-orange-500 rounded-md " />
                <p className="text-slate-500 text-[10px]">
                  {post.createdAt.substring(0, 10)}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TrendingPosts;
