import React from 'react';
import logo from '../images/dice.png';

const Navbar = () => {
    return (
        <div className='top-4 pt-4 w-full h-20'>
            <div className='flex py-3 px-2 w-full justify-between items-center'>
                <div className='flex items-center justify-center gap-8'>
                    <div className="w-14 h-4 flex justify-center items-center ml-1">
                        <img className='rounded' src={logo} alt='logo' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <input
                            type='text'
                            className='rounded h-9 justify-center'
                            placeholder='search' />
                    </div>
                </div>
                <div className="flex-none w-14 flex justify-center items-center">
                    <ion-icon name="logo-firefox"></ion-icon>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
