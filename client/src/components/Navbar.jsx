import React, { useState } from 'react';
import logo from '../images/dice.png';

const Navbar = () => {

    const [open, setOpen] = useState(false);
    const handleMenu = () => {
        setOpen(!open);
    };

    return (
        <div className='top-0 pt-2 w-full h-20 sticky'>
            <div className='flex py-4 ml-2 mr-2 rounded-lg justify-between items-center'>
                <div className='flex items-center md:justify-center justify-between gap-8'>
                    <div className="w-14 h-4 flex justify-center items-center ml-2">
                        <img className='rounded border border-[#a4a4d6]' src={logo} alt='logo' />
                    </div>
                    <div className='md:flex hidden  justify-center items-center'>
                        <input
                            type='text'
                            className='rounded-full border border-[#a4a4d6] h-9 bg-[#3d5297] text-center items-center justify-center'
                            placeholder='search' />
                    </div>
                </div>
                <div className='md:flex hidden items-center justify-center gap-8'>
                    <div className='flex items-center'>
                        <button className='bg-[#172554] text-white py-2 rounded-md px-2 border border-[#a4a4d6]'>Connect</button>
                    </div>
                    <div className="flex-none w-14 flex justify-center  items-center">
                        <ion-icon name="logo-firefox"></ion-icon>
                    </div>
                </div>
                <a className='md:hidden absolute justify-end pr-6 cursor-pointer flex w-full' onClick={handleMenu}>
                    {open ? (<ion-icon name="close-circle-outline"></ion-icon>) : (<ion-icon size="larger" name="menu-outline"></ion-icon>)}
                    {open ? (<div className='w-[200px] rounded-lg pt-4 top-14 pb-2 md:hidden flex flex-col justify-between fixed right-2 h-[360px] bg-[#06123d] shadow-2xl shadow-black '>
                        <div className='w-full h-full flex gap-3 top-0 flex-col'>
                            <a className='flex gap-3 justify-start pl-4'>
                                <ion-icon size="large" name="grid-outline"></ion-icon>
                                <p className='text-white text-[18px]'>Home</p>
                            </a>
                            <a className='flex gap-3 justify-start pl-4'>
                                <ion-icon name="person-circle-outline"></ion-icon>
                                <p className='text-white text-[18px]'>profile</p>
                            </a>
                            <a className='flex gap-3 justify-start pl-4'>
                                <ion-icon name="card-outline"></ion-icon>
                                <p className='text-white text-[18px]'>Wallet</p>
                            </a>
                            <a className='flex gap-3 justify-start pl-4'>
                                <ion-icon name="download-outline"></ion-icon>
                                <p className='text-white text-[18px]'>Download</p>
                            </a>
                            <a className='flex gap-3 justify-start pl-4'>
                                <ion-icon name="notifications-circle-outline"></ion-icon>
                                <p className='text-white text-[18px]'>Notifications</p>
                            </a>
                            <a className='flex gap-3 justify-start pl-4'>
                                <ion-icon name="settings-outline"></ion-icon>
                                <p className='text-white text-[18px]'>Settings</p>
                            </a>
                            <a className='flex gap-3 justify-start pl-4'>
                                <ion-icon name="sunny-outline"></ion-icon>
                                <p className='text-white text-[18px]'>Dark Mode</p>
                            </a>
                        </div>
                    </div>) : null}
                </a>
            </div>
        </div>
    );
};

export default Navbar;
