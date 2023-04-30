import React from "react";
import MakePost from './MakePost'
import AllPost from "./AllPost";

const PostMain = () => {
  return (
    <div>
      <MakePost />
      <hr className="my-4 bg-gray-300 w-full" />
      <AllPost />
    </div>
  );
};

export default PostMain;
