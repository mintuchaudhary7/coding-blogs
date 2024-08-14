import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";

function Blogs() {
  // consuming data
  const { loading, posts } = useContext(AppContext);
  console.log("printing inside blog component");
  console.log(posts);
  return (
    <div className="w-11/12 max-w-[450px] h-full py-3 flex flex-col gap-y-7 my-[66px] justify-center items-center"> 
      {loading ? (
        <Spinner />
      ) : posts.length === 0 ? (
        <div>
          <p>No post found</p>{" "}
        </div>
      ) : (
        posts.map((post) => (
          <div key={post.id}>
            <p className="font-bold text-sm">{post.title}</p>
            <p className="text-xs">
              by <span className="italic">{post.author}</span> on <span className="underline font-bold">{post.category}</span>
            </p>

            <p className="text-xs">
              Posted on <span>{post.date}</span>{" "}
            </p>

            <p className="text-sm mt-[10px]">{post.content}</p>

            <div className="flex gap-x-2">
              {post.tags.map((tag, index) => {
                return <span key={index} className="underline text-xs text-blue-700 font-bold mt-[5px]">{`#${tag}`}</span>;
              })}
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Blogs;
