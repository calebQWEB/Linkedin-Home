import React, { useState } from "react";
import owner from "../../assets/profile/owner.jpg";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { MdPhotoSizeSelectActual } from "react-icons/md";
import { IoLogoYoutube } from "react-icons/io";
import { RiArticleFill } from "react-icons/ri";

const MakePost = () => {
    const [input, setInput] = useState('')

  return (
    <div>
      <div className="p-3 bg-white sm:rounded-lg w-full">
        <div className="flex items-center gap-3 w-full">
          <img
            src={owner}
            alt="Owner of account"
            className="w-12 h-12 rounded-full"
          />
          <input
            type="text"
            className="border border-gray-400 w-full p-2 rounded-3xl hover:bg-gray-100 md:w-96 lg:w-full"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </div>

        <div className="flex items-center justify-between mt-3">
          <div className="flex items-center gap-1 md:gap-3 cursor-pointer">
            <MdPhotoSizeSelectActual className="text-blue text-xl lg:text-3xl" />
            <p className="font-medium text-sm text-links">Photo</p>
          </div>

          <div className="flex items-center gap-1 md:gap-3 cursor-pointer">
            <IoLogoYoutube className="text-green-600 text-xl lg:text-3xl" />
            <p className="font-medium text-sm text-links">Video</p>
          </div>

          <div className="flex items-center gap-1 md:gap-3 cursor-pointer">
            <BsFillBriefcaseFill className="text-purple-500 text-xl lg:text-3xl" />
            <p className="font-medium text-sm text-links">Job</p>
          </div>

          <div className="flex items-center gap-1 md:gap-3 cursor-pointer">
            <RiArticleFill className="text-red-700 text-xl lg:text-3xl" />
            <p className="font-medium text-sm text-links">Write article</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakePost;
