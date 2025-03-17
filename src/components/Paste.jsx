import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RemoveFromPaste } from '../Redux/pasteSlice';
import toast from 'react-hot-toast';
import ShareButton from './ShareButton';

const Paste = () => {
  const pastes = useSelector((state) => state.paste.pastes);
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const filterData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handledel(pasteId) {
    dispatch(RemoveFromPaste(pasteId));
  }

  return (
    <div>

      <div className='overflow-x-hidden w-[800px]'>
        <div className='w-full flex flex-col items-start '>
          <input
            className="p-3 rounded w-full max-w-[300px] mt-5 bg-gray-800 text-white border border-gray-400 focus:outline-none focus:border-teal-400 placeholder-gray-400"
            type="search"
            placeholder="Search here..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className='w-full h-6   mt-4 flex flex-row justify-start items-center space-x-6'>
            <div className='w-4 h-4 bg-red-600 rounded-[50%]'></div>
            <div className='w-4 h-4 bg-blue-600 rounded-[50%]'></div>
            <div className='w-4 h-4 bg-green-600 rounded-[50%]'></div>
          </div>
        </div>

        <div className="flex flex-col gap-5 mt-5 border-1 px-6 py-4 bg-gray-700 ">
          <div className='self-start'>
            <p className='text-5xl font-bold'>All Pastes</p>
          </div>
          {filterData.length > 0 &&
            filterData.map(
              (paste) => {
                return (

                  <div key={paste._id} className="flex flex-col justify-center items-start border-1 rounded border-white p-3 bg-gray-900 hover:scale-102 transition-all duration-500 ease-in-out">
                    <div className='text-4xl font-extrabold  text-blue-200'>{paste.title}</div>
                    <div className='w-full  h-[1px] bg-teal-100 mt-1' ></div>
                    <div className='w-full text-xl opacity-70 mt-2 flex'>{paste.content}</div>
                    <div className="flex flex-row gap-8 content-evenly w-full place-content-evenly mt-2 text-[18px]">
                      <button
                        className="group border-1 rounded bg-teal-800 font-bold px-6 hover:bg-white hover:text-teal-700 transition-all duration-100 cursor-pointer"
                        onClick={(e) => {
                          e.currentTarget.querySelector("a").click();
                        }}
                      >
                        <a href={`/?pastesId=${paste._id}`} className="pointer-events-none">
                          Edit
                        </a>
                      </button>
                      <button
                        className="group border-1 rounded bg-teal-800 font-bold px-6 hover:bg-white hover:text-teal-700 transition-all duration-100 cursor-pointer"
                        onClick={(e) => {
                          e.currentTarget.querySelector("a").click();
                        }}>
                        <a className='pointer-events-none' href={`/pastes/${paste._id}`}>
                          View
                        </a>
                      </button>
                      <button className="group border-1 rounded bg-teal-800 font-bold px-6 hover:bg-white hover:text-teal-700 transition-all duration-100 cursor-pointer"
                        onClick={() => handledel(paste._id)}>Delete</button> {/* ✅ Fixed */}
                      <button className="group border-1 rounded bg-teal-800 font-bold px-6 hover:bg-white hover:text-teal-700 transition-all duration-100 cursor-pointer"
                        onClick={() => {
                          navigator.clipboard.writeText(paste?.content);
                          toast.success("Copied to clipboard")
                        }}>Copy</button>
                      <ShareButton pasteId={paste.id} />
                    </div>
                    <div>{paste.createdAt}</div> {/* ✅ Ensure correct property name */}
                  </div>
                );
              })}
        </div>
      </div>
    </div >
  );
};

export default Paste;
