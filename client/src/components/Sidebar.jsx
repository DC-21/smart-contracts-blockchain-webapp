import React from 'react';
import logo from '../images/dice.png';
import { Link } from 'react-router-dom'

const Sidebar = () => {
    return (
        <div>
            <div className="w-14 h-4 flex md:mt-10 mt-6 justify-center items-center ml-5">
                <img className='rounded border border-[#a4a4d6]' src={logo} alt='logo' />
            </div>
            <div className='w-16 rounded-lg pt-4 pb-4 md:flex hidden flex-col justify-between sticky top-24 ml-4 h-[540px] bg-[#06123d] shadow-2xl shadow-black'>
                <div className='w-full h-full flex gap-3 top-0 flex-col'>
                    <a className='flex justify-center cursor-pointer'>
                        <ion-icon name="grid-outline"></ion-icon>
                    </a>
                    <a className='flex justify-center cursor-pointer'>
                        <ion-icon name="megaphone-outline"></ion-icon>
                    </a>
                    <Link to='/payment' className='flex justify-center cursor-pointer'>
                        <ion-icon name="wallet-outline"></ion-icon>
                    </Link>
                    <a className='flex justify-center cursor-pointer'>
                        <ion-icon name="cash-outline"></ion-icon>
                    </a>
                    <a className='flex justify-center cursor-pointer'>
                        <ion-icon name="person-circle-outline"></ion-icon>
                    </a>
                    <a className='flex justify-center cursor-pointer'>
                        <ion-icon name="log-out-outline"></ion-icon>
                    </a>
                </div>
                <div className='flex w-full flex-col justify-center'>
                    <a className='flex justify-center cursor-pointer'>
                        <ion-icon name="sunny-outline"></ion-icon>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
