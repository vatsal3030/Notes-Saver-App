import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

const ViewPaste = () => {
  const { id } = useParams();
  const allPaste = useSelector((state) => state.paste.pastes);
  const paste = allPaste.filter((p) => p._id === id)[0];
  console.log("final paste : ", paste);
  return (
    <div>
      <div className='flex felx-row gap-2 mt-4 place-content-between'>
        <input disabled type='text' placeholder='Enter Title'
          value={paste.title} onChange={(e) => { setTitle(e.target.value) }}
          className='p-2 rounded-2xl bg-gray-700 w-[65%] pl-4' />
        {/* <button className='p-2 rounded-2xl bg-gray-700' onClick={createPaste}>
          {
            pasteId ? "Update" : "Create My Paste"
          }
        </button> */}
      </div >
      <div className='mt-8'>
        <textarea
          disabled
          value={paste.content}
          className="mt-4 p-4 min-w-[500px] "
          placeholder="Write your notes here..."
          onChange={(e) => setValue(e.target.value)}
          rows={20}
        ></textarea>
      </div>
    </div>
  )
}

export default ViewPaste
