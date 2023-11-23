import Image from "next/image";
import Link from "next/link";

const Featured = ({ posts }) => {
  const sorted = posts?.sort((a, b) => parseInt(b.views) - parseInt(a.views));
  const sortedPosts = sorted?.slice(0, 2);
  const content = sortedPosts[0]?.desc?.substring(0, 220);
  return (
    <div className="flex flex-col sm:justify-around justify-center sm:items-start items-center md:my-8 my-5 2xl:my-10 ">
      <h2 className=" text-center self-center  bg-clip-text  lg:text-[35px] text-[25px] sm:text-[30px] mb-10 text-slate-500 ">
        Hello there , if u here to <b>learn</b> something by reading...
        <br /> grab a <b>Coffee</b> and go ahead
      </h2>
      <div className="flex flex-col md:flex-row justify-between mx-auto md:px-5">
        <div className=" flex-[40%] relative  md:block">
          <Image
            src={sortedPosts[0]?.img || "/assets/tech-keyboard.jpg"}
            alt="tech keyboard"
            width={500}
            height={500}
            className="rounded-md object-cover aspect-auto"
          />
        </div>
        <div className="flex-[40%] flex space-y-3 flex-col justify-center items-start  mt-4 md:mt-0 ">
          <Link
            href={`/blog/${sortedPosts[0]?._id}`}
            className="font-bold text-orange-500  sm:text-[20px] font-mono text-xs flex justify-center items-baseline gap-1"
          >
            {sortedPosts[0]?.title}
            <div className="w-[1px] h-[12px] mx-1 bg-red-600" />
            <p className="text-orange-300 text-xs inline-flex rounded-lg px-2 mx-1  bg-slate-700">
              {sortedPosts[0]?.views}
            </p>
            <span className="text-xs text-slate-600">views </span>
          </Link>
          <div
            className=" text-slate-500 text-sm"
            dangerouslySetInnerHTML={{ __html: content || "content" }}
          ></div>
          <Link
            href={`/blog/${sortedPosts[0]?._id}`}
            className="  bg-slate-600 text-slate-200 rounded-md px-2 py-2 w-fit hover:bg-slate-700 transition-opacity duration-500 ease-in-out "
          >
            Read more
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Featured;
