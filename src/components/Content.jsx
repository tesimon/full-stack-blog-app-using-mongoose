"use client";

import { ThemeContext } from "@/lib/ThemeContext";
import { useContext } from "react";
const Content = ({ content }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={` prose max-w-none ${theme === "dark" && "prose-invert"}`}
      dangerouslySetInnerHTML={{ __html: content }}
    ></div>
  );
};
export default Content;
