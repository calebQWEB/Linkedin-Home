import React, { useState } from 'react'
import owner from '../../assets/profile/owner.jpg'
import { SlOptions } from 'react-icons/sl'
import { BiMessageAltEdit } from 'react-icons/bi'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { IoIosOptions } from 'react-icons/io'

import { useSelector } from 'react-redux';
import Conversation from './Conversation';
import Modal from './Modal';

const Messaging = () => {
  const [showMessage, setShowMessage] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [selectedConvo, setSelectedConvo] = useState([])

  // useSelector is used to access the state of posts from our Redux store
  const Messages = useSelector(state => state.message.conversations)

  return (
    <aside
      //updating the height of the message container based on the value of the showMessage state.
      // If showMessage is true, it increases the height of the container to show the message, and decreases the height when it is false.
      // A transition is also added to provide a smooth effect when changing heights.
      className={`hidden lg:flex justify-end fixed right-0 bottom-0 left-0 z-10 ${showMessage
          ? "h-4/5 transition-height duration-300 ease-in-out"
          : "h-16 transition-height duration-300 ease-in-out"
        }`}
    >
      <div className="bg-white w-1/4 rounded-t-lg border border-gray-300">
        <div className="flex items-center justify-start gap-2 p-3">
          <img
            src={owner}
            alt="Owner of Account"
            className="w-8 h-8 rounded-full"
          />
          <h1 className="mr-auto font-xs font-medium text-links">Messaging</h1>
          <div className="hover:bg-gray-300 p-2 rounded-full">
            <SlOptions className="text-links cursor-pointer" />
          </div>
          <div className="hover:bg-gray-300 p-2 rounded-full">
            <BiMessageAltEdit className="text-links cursor-pointer" />
          </div>

          {/* if the showMessage state is true change chevron up to chevron down */}
          {showMessage ? (
            <div
              className="hover:bg-gray-300 p-2 rounded-full"
              onClick={() => setShowMessage((prev) => !prev)}
            >
              <FaChevronDown className="text-links cursor-pointer" />
            </div>
          ) : (
            <div
              className="hover:bg-gray-300 p-2 rounded-full"
              onClick={() => setShowMessage((prev) => !prev)}
            >
              <FaChevronUp className="text-links cursor-pointer" />
            </div>
          )}
        </div>
        <hr className="my-3" />
        <div className="relative px-3">
          <input
            type="text"
            placeholder="Search messages"
            className="bg-search py-2 pl-10 w-full rounded-md"
          />
          <BsSearch className="absolute top-1/2 transform -translate-y-1/2 left-6" />
          <IoIosOptions className="absolute top-1/2 transform -translate-y-1/2 right-6" />
        </div>

        <div className="flex items-center justify-center gap-24 mt-4">
          <button className="text-sm font-semibold focus:bg-gray-400 py-3 px-5 w-full">
            Focused
          </button>
          <button className="text-sm font-semibold focus:bg-gray-400 py-3 px-5 w-full">
            Other
          </button>
        </div>

        <hr />

        {/* Conversations */}
        <div className="flex flex-col overflow-y-scroll h-3/5">
          {Messages.map((message, index) => (
            <div
              key={index}
              className="hover:bg-main"
              onClick={() => {
                setShowModal((prev) => !prev)
                setSelectedConvo(message)
              }}
            >
              <div className="cursor-pointer px-4 my-4">
                <Conversation key={index} message={message} />
              </div>
              <hr />
            </div>
          ))}
        </div>

        {
          /* Modal Section */
          showModal && (
            <div className='fixed left-1/3 bottom-0 bg-white h-4/5 w-2/5 rounded-t-lg border border-gray-300'>
              <Modal message={selectedConvo} setShowModal={setShowModal} />
            </div>
          )
        }
      </div>
    </aside>
  );
}

export default Messaging