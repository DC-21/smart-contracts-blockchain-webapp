import React from 'react';
import logo from '../images/dice.png';

const Navbar = () => {
    return (
        <div className='top-4 pt-2 w-full h-20'>
            <div className='flex py-4 ml-2 mr-2 rounded justify-between items-center  bg-[#0e0e10]'>
                <div className='flex items-center justify-center gap-8'>
                    <div className="w-14 h-4 flex justify-center items-center ml-2">
                        <img className='rounded' src={logo} alt='logo' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <input
                            type='text'
                            className='rounded h-9justify-center'
                            placeholder='search' />
                    </div>
                </div>
                <div className='flex items-center justify-center gap-8'>
                    <div className='flex items-center'>
                        <button className='bg-[#172554] text-white py-2 px-2'>Connect</button>
                    </div>
                    <div className="flex-none w-14 flex justify-center items-center">
                        <ion-icon name="logo-firefox"></ion-icon>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
