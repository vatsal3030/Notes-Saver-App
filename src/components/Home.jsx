import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { UpdateToPaste } from '../Redux/pasteSlice';
import { AddToPaste } from '../Redux/pasteSlice';
const Home = () => {
    const [title, setTitle] = useState("");
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pastesId");
    const dispatch = useDispatch();
    const allPaste = useSelector((state) => state.paste.pastes);

    useEffect(() => {
        console.log("Inside use effect");
        if (pasteId) {
            const paste = allPaste.find((p) => p._id === pasteId);
            setTitle(paste.title);
            setValue(paste.content);
        }
    }, [pasteId]);

    function createPaste() {
        const paste = {
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(36),
            createAt: new Date().toISOString(),
        }


        if (pasteId) {
            // update
            dispatch(UpdateToPaste(paste));
        }
        else {
            // create
            dispatch(AddToPaste(paste));
        }

        // After Creating / updatation
        setTitle('');
        setValue('');
        setSearchParams({});

    }

    return (
        <div className='overflow-x-hidden w-[800px]'>
            <div className='flex felx-row gap-2 mt-4 place-content-between'>
                <input type='text' placeholder='Enter Title'
                    value={title} onChange={(e) => { setTitle(e.target.value) }}
                    className="w-full max-w-[600px] p-3 bg-gray-800 text-white border border-gray-400 rounded focus:outline-none focus:border-teal-400 placeholder-gray-400"
                />
                <button className='p-2 rounded-xl bg-gray-700 border-2 border-gray-700 hover:border-2 hover:border-teal-600 ' onClick={createPaste}>
                    {
                        pasteId ? "Update" : "Create My Paste"
                    }
                </button>
            </div >
            <div className='w-full'>
                <div className='w-full h-6 border border-gray-500 p-4  mt-4 flex flex-row justify-start items-center space-x-6 bg-gray-900'>
                    <div className='w-4 h-4 bg-red-600 rounded-[50%]'></div>
                    <div className='w-4 h-4 bg-blue-600 rounded-[50%]'></div>
                    <div className='w-4 h-4 bg-green-600 rounded-[50%]'></div>
                </div>
                <div className='w-full mt-0 f'>
                    <textarea
                        value={value}
                        className="w-full p-4 bg-gray-900 text-white border border-gray-500  resize-none focus:outline-none focus:border-teal-400 placeholder-gray-400"
                        placeholder="Write your notes here..."
                        onChange={(e) => setValue(e.target.value)}
                        rows={20}
                    ></textarea>
                </div>
            </div>
        </div>
    )
}

export default Home;
