import React from "react";
import cover from "../../assets/profile/cover-image.jpg";
import owner from "../../assets/profile/owner.jpg";
import { BsFillBookmarkFill } from "react-icons/bs";

// The Profile component takes in a prop called showMore which determines whether to show additional profile information
const Profile = ({ showMore }) => {
  return (
    <div>
      <div className="bg-white relative sm:rounded-lg">
        <img
          src={cover}
          alt="Cover Image"
          className="h-20 w-full object-cover sm:rounded-t-lg"
        />
        <img
          src={owner}
          alt="Owner of Account"
          className="h-20 w-20 rounded-full absolute top-50 left-1/2 tranform -translate-x-1/2 -translate-y-1/2"
        />
        <div className="mt-12 mb-5 text-center px-2">
          <h1 className="font-bold">John Maxwell</h1>
          <p className="text-xs sm:text-sm text-links">
            Software Developer | Web Development | Frontend | React.js |
            JavaScript | Tailwind | Html | CSS | API | Git | Figma
          </p>
        </div>
        <hr />

        {/* If showMore is true, show additional profile information */}
        {showMore && (
          <div>
            <div className="my-5 text-left">
              <div className="hover:bg-gray-200 flex items-center justify-between py-1 px-2">
                <p className="text-links text-xs font-medium cursor-pointer">
                  Who's viewed your Profile
                </p>
                <span className="text-blue text-xs font-medium pl-2">100</span>
              </div>

              <div className="hover:bg-gray-200 flex items-center justify-between py-1 px-2">
                <p className="text-links text-xs font-medium cursor-pointer">
                  Impressions of your Post
                </p>
                <span className="text-blue text-xs font-medium pl-2">500</span>
              </div>
            </div>
            <hr />

            <div className="bg-white flex items-center justify-start gap-2 px-2 py-3 hover:bg-gray-200 border-b border-gray-300 cursor-pointer sm:rounded-b-lg">
              <BsFillBookmarkFill className="text-links" />
              <p className="font-medium text-xs text-links">My items</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;
