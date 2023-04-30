import React from 'react'

// the conversation component takes a prop that is an object of the current conversation
const Conversation = ({message}) => {
  return (
    <div className='flex items-center justify-start gap-3'>
        <img src={message.avatar} alt="Conversation profile picture" className='w-10 h-10 rounded-full'/>
        <div className='mr-auto'>
            <h1 className='text-sm'>{message.name}</h1>
            <p className='text-xs text-links'>You: {message.conversation[0].message}</p>
        </div>
        <span className='text-xs'>{message.timestamp}</span>
    </div>
  )
}

export default Conversation