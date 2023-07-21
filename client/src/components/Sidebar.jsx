import React from 'react';

const Sidebar = () => {
    return (
        <div className='w-16 rounded-lg pt-10 flex flex-col fixed bottom-10 left-2 h-[550px] bg-[#0e0e10]'>
            <div className='w-full justify-center h-full flex flex-col'>
                <a className='bg-white flex justify-center'>
                    <ion-icon name="grid-outline"></ion-icon>
                </a>
                <a className='bg-white flex justify-center'>
                    <ion-icon name="person-circle-outline"></ion-icon>
                </a>
                <a className='bg-white flex justify-center'>
                    <ion-icon name="notifications-circle-outline"></ion-icon>
                </a>
                <a className='bg-white flex justify-center'>
                    <ion-icon name="card-outline"></ion-icon>
                </a>
                <a className='bg-white flex justify-center'>
                    <ion-icon name="person-circle-outline"></ion-icon>
                </a>
                <a className='bg-white flex justify-center'>
                    <ion-icon name="download-outline"></ion-icon>
                </a>
            </div>
            <div className='flex'>
                <a className='bg-white flex justify-center'>
                    <ion-icon name="download-outline"></ion-icon>
                </a>
            </div>
        </div>
    );
};

export default Sidebar;
