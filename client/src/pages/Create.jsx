import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ethers } from 'ethers';

const Create = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    title: '',
    description: '',
    target: '',
    deadline: '',
    image: ''
  });
  return (
    <div className='justify-center items-center flex flex-col rounded-[10px] md:w-[93%] w-full md:h-screen h-auto bg-[#101b42] md:ml-20 ml-0 mt-3'>
      {isLoading && 'Loader...'}
      <div className='bg-[#374674] flex justify-center items-center p-[20px]'>
        <h1 className='text-white font-bold leading-[30px] text-[35px]'>Start a Campaign</h1>
      </div>
    </div>
  )
}

export default Create