import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col max-[640px]:gap-2 sm:flex-row justify-around  mt-5 py-10 bg-slate-950 rounded-sm">
        <div className="flex flex-col gap-4 ">
          <span className="text-orange-300 inline-flex gap-2">
            Icons credit <p className="text-slate-500">Icons by icons8</p>{" "}
          </span>
        </div>
        <div className="links flex flex-col  gap-2 ">
          <span className="text-[20px] text-white font-bold  underline underline-offset-4">
            links
          </span>
          <Link href={"/about"} className="text-slate-300 text-sm">
            About
          </Link>
          <Link href={"/blog"} className="text-slate-300 text-sm">
            Home page
          </Link>
          <Link href={"/create"} className="text-slate-300 text-sm">
            Create post
          </Link>
        </div>
        <div className="tags  flex flex-col  gap-2 flex-wrap  ">
          <span className="text-[20px]  font-bold text-slate-200 underline underline-offset-4">
            Tags
          </span>
          <Link href={"/blog?cat=coding"} className="text-slate-300 text-sm">
            Coding
          </Link>
          <Link href={"/blog?cat=tech"} className="text-slate-300 text-sm">
            Tech
          </Link>
          <Link href={"/blog?cat=travel"} className="text-slate-300 text-sm">
            Travel
          </Link>
          <Link href={"/blog?cat=food"} className="text-slate-300 text-sm">
            Food
          </Link>
          <Link href={"/blog?cat=culture"} className="text-slate-300 text-sm">
            Culture
          </Link>
        </div>
      </div>
    </>
  );
};

export default Footer;
