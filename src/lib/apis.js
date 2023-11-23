export const fetchingAllPosts = async (pageNumb, catagory) => {
  const res = await fetch(
    `/api/allposts?page=${pageNumb || ""}&cat=${catagory || ""}`,
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    throw new Error("failed to fetch all the posts lists");
  }
  return res.json();
};

//single post fetching

export const fetchSinglePostData = async (slug) => {
  const response = await fetch(`/api/allposts/${slug}`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("failed to fetch the single post ");
  }
  return response.json();
};

//comments fetching

export const fetchingCommentsData = async (url) => {
  const response = await fetch(url);
  if (!response.ok)
    throw new Error("failed to fetch the comments from the client side");
  return response.json();
};
