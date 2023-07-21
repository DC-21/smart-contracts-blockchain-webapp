import React from 'react';
import logo from '../images/dice.png';

const Navbar = () => {
    return (
        <div className='top-4 pt-4 w-full h-20'>
            <div className='bg-white flex py-5 px-2 w-full justify-center items-center'>
                <div className="flex-none w-14 h-4 flex justify-center items-center ml-1">
                    <img className='rounded' src={logo} alt='logo' />
                </div>
                <div className="grow h-4 flex justify-center items-center">
                    <input
                    type='text'
                    placeholder='search'
                    className='h-8 text-center'
                    />
                </div>
                <div className="grow h-4 flex justify-center items-center">
                    02
                </div>
                <div className="flex-none w-14 h-4 flex justify-center items-center">
                    03
                </div>
            </div>
        </div>
    );
};

export default Navbar;
