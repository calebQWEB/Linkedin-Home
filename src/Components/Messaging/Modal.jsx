import React from "react";
import { IoIosOptions } from "react-icons/io";
import { AiOutlineVideoCameraAdd, AiOutlineClose } from "react-icons/ai";
import { BsArrowsAngleContract } from "react-icons/bs";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { ImAttachment } from "react-icons/im";
import { BiSmile } from "react-icons/bi";
import { SlOptions } from "react-icons/sl";

// create a Modal component that takes two props: the current conversation that was clicked by the user to access it and setShowModal to control whether the modal is displayed or not
const Modal = ({ message, setShowModal }) => {
  return (
    <div>
      <div className="flex items-center gap-2 bg-white px-4 py-1">
        <img
          src={message.avatar}
          alt="Conversation profile picture"
          className="w-12 h-12 rounded-full"
        />
        <h1 className="mr-auto font-bold text-sm">{message.name}</h1>

        <div className="flex items-center gap-2">
          <div className="hover:bg-gray-300 p-2 rounded-full cursor-pointer">
            <IoIosOptions />
          </div>
          <div className="hover:bg-gray-300 p-2 rounded-full cursor-pointer">
            <AiOutlineVideoCameraAdd />
          </div>
          <div className="hover:bg-gray-300 p-2 rounded-full cursor-pointer">
            <BsArrowsAngleContract />
          </div>
          <div
            className="hover:bg-gray-300 p-2 rounded-full cursor-pointer"
            onClick={() => {
              setShowModal((prev) => !prev);
            }}
          >
            <AiOutlineClose />
          </div>
        </div>
      </div>
      <hr className="mt-2" />

      <div className="overflow-y-scroll h-60">
        <div>
          <div className="p-4">
            <img
              src={message.avatar}
              alt="Conversation profile picture"
              className="w-20 h-20 rounded-full"
            />
            <h1 className="mt-2 text-sm font-bold">{message.name}</h1>
            <p className="">{message.jobTitle}</p>
          </div>

          <div className="flex items-center justify-between mt-2">
            <hr className="w-52 text-black" />
            <span className="text-md text-links uppercase font-medium">
              {message.conversation[0].timestamp}
            </span>
            <hr className="w-52 text-black" />
          </div>
        </div>

        <div className="p-4 grid gap-8">
          {/* The message prop is an object that contains an array called conversation which holds the conversation between the user and their connection. */}
          {/* We are mapping through this conversation array to get an array of messages, which we render on the page. */}
          {message.conversation.map((convo, index) => (
            <div key={index} className="flex items-start justify-start gap-2">
              <img
                src={convo.avatar || message.avatar}
                alt="Present Convo image"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <h1 className="font-medium text-sm mb-2">
                  {convo.sender === "you" ? "John Maxwell" : message.name}
                </h1>
                <p className="text-sm text-links">{convo.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr />

      <form className="p-2">
        <textarea
          id=""
          cols="30"
          rows="10"
          placeholder="Write a message"
          className="h-24 w-full p-4 bg-gray-100 rounded-lg"
        ></textarea>
      </form>
      <hr />

      <div className="flex items-center gap-4 mt-5 px-4">
        <div className="hover:bg-gray-300 p-2 rounded-full cursor-pointer">
          <MdPhotoSizeSelectActual className="text-links" />
        </div>

        <div className="hover:bg-gray-300 p-2 rounded-full cursor-pointer">
          <ImAttachment className="text-links" />
        </div>

        <div className="hover:bg-gray-300 p-2 rounded-full cursor-pointer mr-auto">
          <BiSmile className="text-links" />
        </div>

        <button className="bg-gray-200 py-1 px-3 rounded-3xl text-blue font-bold">
          Send
        </button>
        <div className="hover:bg-gray-300 p-2 rounded-full cursor-pointer">
          <SlOptions className="text-links" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
