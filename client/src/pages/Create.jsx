import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

const Create = () => {
    const navigate = useNavigate();
  return (
    <div className='justify-center md:w-[93%] w-full h-auto bg-black md:ml-20 ml-0 mt-3'>
        <p className='text-white text-left'>create campaign</p>
    </div>
  )
}

export default Create