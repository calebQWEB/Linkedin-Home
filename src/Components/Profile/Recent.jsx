import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";

// The recent component recieves props that are states to determine whether to show a section of the recent Component
const Recent = ({ showRecent, showGroups, setShowRecent, setShowGroups }) => {
  return (
    <div className="text-start mt-2 pb-2 bg-white border-t border-gray-300 sm:rounded-lg">
      <div className="flex items-center gap-1 mt-3">
        <span className="text-xs px-2">Recent</span>

        {/* if showRecent is true change the chevron up to chevron down */}
        {showRecent ? (
          <FaChevronDown
            className="text-links cursor-pointer bg-gray-300 rounded-full p-1 opacity-0 hover:opacity-100"
            size={30}
            onClick={() => setShowRecent((prevState) => !prevState)}
          />
        ) : (
          <FaChevronUp
            className="text-links cursor-pointer bg-gray-300 rounded-full p-1 opacity-0 hover:opacity-100"
            size={30}
            onClick={() => setShowRecent((prevState) => !prevState)}
          />
        )}
      </div>

      {/* if showRecent is true show Recent information */}
      {showRecent && (
        <div>
          <div className="flex items-center gap-1 py-1 px-2 hover:bg-gray-300 my-2 cursor-pointer">
            <IoIosPeople />
            <p className="text-xs text-links font-medium">Software Developer</p>
          </div>
          <div className="flex items-center gap-1 py-1 px-2 hover:bg-gray-300 my-2 cursor-pointer">
            <IoIosPeople />
            <p className="text-xs text-links font-medium hover:bg-gray-300">
              User Experience (UX)
            </p>
          </div>
        </div>
      )}

      <div className="flex items-center gap-1 mt-5">
        <span className="text-xs text-blue font-bold px-2 hover:underline cursor-pointer">
          Groups
        </span>
        {/* if showGroups is true change the chevron up to chevron down */}
        {showGroups ? (
          <FaChevronDown
            className="text-links cursor-pointer bg-gray-300 rounded-full p-1 opacity-0 hover:opacity-100"
            size={30}
            onClick={() => setShowGroups((prevState) => !prevState)}
          />
        ) : (
          <FaChevronUp
            className="text-links cursor-pointer bg-gray-300 rounded-full p-1 opacity-0 hover:opacity-100"
            size={30}
            onClick={() => setShowGroups((prevState) => !prevState)}
          />
        )}
      </div>

      {/* if showGroups is true render show the groups information */}
      {showGroups && (
        <div>
          <div className="flex items-center gap-1 py-1 px-2 hover:bg-gray-300 my-2 cursor-pointer">
            <IoIosPeople />
            <p className="text-xs text-links font-medium">Software Developer</p>
          </div>
          <div className="flex items-center gap-1 py-1 px-2 hover:bg-gray-300 my-2 cursor-pointer">
            <IoIosPeople />
            <p className="text-xs text-links font-medium">
              User Experience (UX)
            </p>
          </div>
        </div>
      )}

      <p className="text-blue text-xs font-bold hover:underline my-2 py-1 px-2 cursor-pointer">
        Events
      </p>
      <p className="text-blue text-xs font-bold hover:underline my-2 py-1 px-2 cursor-pointer">
        Followed Hashtag
      </p>
      <hr />
      <p className="text-links text-xs xl:text-sm font-bold my-2 py-1 px-2 cursor-pointer text-center">
        Discover More
      </p>
    </div>
  );
};

export default Recent;
