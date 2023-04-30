import React, { useState } from "react";
import { BsFillHandThumbsUpFill } from "react-icons/bs";
import { TfiCommentAlt } from "react-icons/tfi";
import { BiRepost } from "react-icons/bi";
import { BsFillSendFill } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { likes, addComment } from "./PostSlice";
import owner from "../../assets/profile/owner.jpg";

// The post component receives a prop called "post". This prop is an object that represents the current post, and is initially defined in the postSlice file as part of the initial state of the Redux store. The object contains all the necessary data for the post, such as the post's title, content, author, and any associated comments or likes.
const Post = ({ post }) => {
  const dispatch = useDispatch();
  const [liked, setLiked] = useState(`You and ${post.likes} others`);
  const [input, setInput] = useState("");
  const [comment, setComment] = useState(false);
  const [showButton, setShowButton] = useState(false);

  // This function is called when the user submits a comment on a post.
  // It prevents the default form submission behavior and extracts the text inputted by the user.
  // It also retrieves the id of the post on which the comment is being added.
  // The 'addComment' action is dispatched to add the comment to the state.
  // Finally, it clears the input field.
  const submit = (e) => {
    e.preventDefault();
    const text = input;
    const postId = post.id;
    dispatch(addComment({ postId, text }));
    setInput("");
  };

  // It checks if the length of the field (i.e., the input value) is greater than 0, and if so, sets the showButton state variable to true
  // Within the function, it extracts the current value of the input field using e.target.value, and then sets this value to the input state variable using the setInput function.
  const handleChange = (e) => {
    const field = e.target.value;
    setInput(field);
    setShowButton(field.length > 0);
  };

  return (
    <div className="bg-white border-y border-gray-300 py-4 sm:rounded-lg w-full">
      <div className="flex items-center justify-start gap-2 px-4 mb-3">
        <img
          src={post.image}
          alt="Author Image"
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h1 className="font-bold text-sm xl:text-base">{post.author}</h1>
          <p className="text-links text-xs">{post.jobTitle}</p>
          <p className="text-links text-xs">3h</p>
        </div>
      </div>

      <div className="text-xs xl:text-sm px-4 mb-3">{post.content}</div>

      <picture>
        <img src={post.postImage} alt="Post Image" className="w-full" />
      </picture>

      <div className="px-4 mt-2 flex items-center justify-between">
        <div className="flex items-center justify-start gap-1">
          <AiOutlineLike className="bg-primary p-1 rounded-full text-xl" />
          <p className="text-xs font-medium text-links xl:text-sm">
            {post.isLiked ? liked : post.likes}
          </p>
        </div>

        <div>
          <p></p>
          <p
            className="text-xs xl:text-sm font-medium text-links hover:text-blue hover:underline cursor-pointer"
            onClick={() => setComment((prev) => !prev)}
          >
            Comments
          </p>
        </div>
      </div>

      <hr className="mt-2" />

      <div className="flex items-center justify-between mt-4 px-2">
        <div
          className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-200 rounded-md"
          onClick={() => dispatch(likes(`${post.id}`))}
        >
          <BsFillHandThumbsUpFill
            className={`${
              post.isLiked ? "text-xl text-sky-500" : "text-xl"
            } text-xl text-links`}
          />
          <p
            className={`${
              post.isLiked ? "text-sky-500" : ""
            } font-medium text-sm text-links`}
          >
            Likes
          </p>
        </div>

        <div
          className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-200 rounded-md"
          onClick={() => setComment((prev) => !prev)}
        >
          <TfiCommentAlt className="text-xl text-links" />
          <p className="font-medium text-sm text-links">Comments</p>
        </div>

        <div className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-200 rounded-md">
          <BiRepost className="text-xl text-links" />
          <p className="font-medium text-sm text-links">Repost</p>
        </div>

        <div className="flex items-center gap-2 cursor-pointer p-2 hover:bg-gray-200 rounded-md">
          <BsFillSendFill className="text-xl text-links" />
          <p className="font-medium text-sm text-links">Send</p>
        </div>
      </div>

      {comment && (
        <div>
          <div className="px-3 flex items-start justify-start gap-2 mt-4">
            <img
              src={owner}
              alt="Owner of Account"
              className="w-12 h-12 rounded-full"
            />
            <form className="block w-full" onSubmit={submit}>
              <input
                type="text"
                className="block rounded-3xl w-full px-3 py-2 border border-gray-400 bg-transparent"
                onChange={handleChange}
                value={input}
                placeholder="Add a comment..."
              />
              {showButton && (
                <button className="bg-primary py-1 px-3 mt-3 rounded-3xl font-semibold text-xs text-white">
                  Post
                </button>
              )}
            </form>
          </div>

          <div className="px-3 mt-6 flex flex-col gap-3">
            {
              // We are mapping through the array of comments in the 'post.comments' property to return a new array with each comment rendered on the page. This allows us to display all comments associated with the current post.
              post.comments.map((comments) => (
                <div className="flex items-start gap-2" key={comments.id}>
                  <img
                    src={comments.authorImage}
                    alt="comment owner image"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="w-full">
                    <div className="bg-main p-2 rounded-tr-lg rounded-br-lg rounded-bl-lg w-full">
                      <div className="mb-3">
                        <h1 className="text-sm font-bold">{comments.author}</h1>
                        <p className="text-xs text-links">
                          {comments.jobTitle}
                        </p>
                      </div>

                      <p className="text-sm">{comments.text}</p>
                    </div>

                    <div className="flex items-center gap-2 mt-2 pl-2">
                      <p className="text-sm font-medium text-links cursor-pointer hover:bg-main p-1 rounded-sm">
                        Like
                      </p>
                      <div className="border-l border-gray-300 h-6"></div>
                      <p className="text-sm font-medium text-links cursor-pointer hover:bg-main p-1 rounded-sm">
                        Reply
                      </p>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      )}
    </div>
  );
};

export default Post;
