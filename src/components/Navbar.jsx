import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className='overflow-x-hidden w-full h-full flex items-center space-x-16'>
            <div className='border-2 border-teal-100 rounded p-2 bg-gray-900'>
                <p className='text-xl text-teal-200'>
                    Notes Saver App</p>
            </div>
            <div className="flex flex-row gap-4 place-content-evenly space-x-4 ">
                <NavLink to="/" className="group">
                    <p className="text-xl font-bold text-teal-500">Home</p>
                    <div className="relative bottom-[-8px] w-0 h-[2px] bg-teal-300 transition-all duration-300 ease-in-out group-hover:w-full"></div>

                </NavLink>
                <NavLink to="/pastes" className="group">
                    <p className="text-xl font-bold text-teal-500">Pastes</p>
                    <div className="relative bottom-[-8px] w-0 h-[2px] bg-teal-300 transition-all duration-300 ease-in-out group-hover:w-full"></div>
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;