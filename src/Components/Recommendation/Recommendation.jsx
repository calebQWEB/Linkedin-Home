import React from "react";
import { faker } from "@faker-js/faker";
import { BsInfoSquareFill } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const Recommendation = () => {
  return (
    <div className="bg-white sm:rounded-lg p-4 mt-5 lg:mt-0 border-y border-gray-300 sm:border sm:hidden lg:block w-full">
      <div className="flex items-center justify-between mb-3">
        <h1>Add to your feed</h1>
        <BsInfoSquareFill />
      </div>

      <div>
        <div className="flex items-start justify-start gap-2 mb-4">
          <img
            src={faker.internet.avatar()}
            alt="Account onwer image"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h1 className="text-sm font-bold mb-2">{faker.name.fullName()}</h1>
            <p className="text-xs text-links mb-2">{faker.name.jobTitle()}</p>
            <button className="py-1 px-3 border border-gray-500 text-links font-bold rounded-2xl flex items-center gap-1 cursor-pointer">
              <AiOutlinePlus />
              Follow
            </button>
          </div>
        </div>

        <div className="flex items-start justify-start gap-2 mb-4">
          <img
            src={faker.internet.avatar()}
            alt="Account onwer image"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h1 className="text-sm font-bold mb-2">{faker.name.fullName()}</h1>
            <p className="text-xs text-links mb-2">{faker.name.jobTitle()}</p>
            <button className="py-1 px-3 border border-gray-500 text-links font-bold rounded-2xl flex items-center gap-1 cursor-pointer">
              <AiOutlinePlus />
              Follow
            </button>
          </div>
        </div>

        <div className="flex items-start justify-start gap-2 mb-4">
          <img
            src={faker.internet.avatar()}
            alt="Account onwer image"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h1 className="text-sm font-bold mb-2">{faker.name.fullName()}</h1>
            <p className="text-xs text-links mb-2">{faker.name.jobTitle()}</p>
            <button className="py-1 px-3 border border-gray-500 text-links font-bold rounded-2xl flex items-center gap-1 cursor-pointer">
              <AiOutlinePlus />
              Follow
            </button>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-start gap-2">
        <p className="font-bold text-sm text-links">View all recommendations</p>
        <BsArrowRight />
      </div>
    </div>
  );
};

export default Recommendation;
