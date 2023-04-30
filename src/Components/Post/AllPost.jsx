import React from "react";
import Post from "./Post";
import { useSelector } from "react-redux";

const AllPost = () => {
  // useSelector is used to access the state of posts from our Redux store
  const Posts = useSelector((state) => state.post.posts);

  return (
    <div className="w-full">
      <div className="flex flex-col gap-3">
        {/* Using map method to loop through each post in the Posts array */}
        {/* We pass each post as a prop to the Post component */}
        {Posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
    </div>
  );
};

export default AllPost;
