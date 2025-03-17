import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ViewPaste = () => {
  const { id } = useParams();
  const allPaste = useSelector((state) => state.paste.pastes);
  const paste = allPaste.filter((p) => p._id === id)[0];

  return (
    <div className='overflow-x-hidden w-[800px]'>
      <div className='flex flex-row gap-2 mt-4 place-content-between'>
        <input
          disabled
          type='text'
          placeholder='Enter Title'
          value={paste.title}
          className="w-full max-w-[600px] p-3 bg-gray-800 text-white border border-gray-400 rounded focus:outline-none placeholder-gray-400"
        />
      </div>

      <div className='w-full'>
        <div className='w-full h-6 border border-gray-500 p-4 mt-4 flex flex-row justify-start items-center space-x-6 bg-gray-900'>
          <div className='w-4 h-4 bg-red-600 rounded-[50%]'></div>
          <div className='w-4 h-4 bg-blue-600 rounded-[50%]'></div>
          <div className='w-4 h-4 bg-green-600 rounded-[50%]'></div>
        </div>
        <div className='w-full mt-0'>
          <textarea
            disabled
            value={paste.content}
            className="w-full p-4 bg-gray-900 text-white border border-gray-500 resize-none focus:outline-none placeholder-gray-400"
            placeholder="Write your notes here..."
            rows={20}
          ></textarea>
        </div>
      </div>
    </div>
  )
}

export default ViewPaste;
