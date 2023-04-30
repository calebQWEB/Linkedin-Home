import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import Recent from "./Recent";
import Profile from "./Profile";

const ProfileMain = () => {
  const [showRecent, setShowRecent] = useState(true);
  const [showGroups, setShowGroups] = useState(true);
  const [showMore, setShowMore] = useState(true);

  return (
    <div className="text-center xl:w-1/2 profile relative">
      {/* profile card */}
      <Profile showMore={showMore} />

      {showMore && (
        <div className='md:sticky top-20'>
          <Recent
            showGroups={showGroups}
            setShowGroups={setShowGroups}
            showRecent={showRecent}
            setShowRecent={setShowRecent}
          />
        </div>
      )}

      <div
        className="hidden xl:block hover:bg-gray-200 rounded-md my-4"
        onClick={() => setShowMore((prevState) => !prevState)}
      >
        {showMore ? (
          <div className="hidden xl:flex items-center gap-1 justify-center py-1">
            <span className="cursor-pointer text-sm text-links font-medium">
              Show less
            </span>
            <FaChevronUp className="text-links" />
          </div>
        ) : (
          <div className="hidden xl:flex items-center gap-1 justify-center py-1">
            <span className="cursor-pointer text-sm text-links font-medium">
              Show more
            </span>
            <FaChevronDown className="text-links" />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileMain;
