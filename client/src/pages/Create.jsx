import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormField from '../components/FormField';
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
    <div className='justify-center items-center flex flex-col rounded-[10px] w-full md:h-screen h-auto bg-[#101b42]'>
      {isLoading && 'Loader...'}
      <div className='bg-[#374674] flex justify-center items-center rounded-[10px] md:mt-6 mt-4 md:p-[20px] p-4'>
        <h1 className='text-white font-bold leading-[30px] md:text-[35px] sm:text-[16px]'>Start a Campaign</h1>
      </div>
      <form className='w-full flex flex-col mt-6 mb-6 gap-4'>
        <div className='flex flex-wrap gap-0'>
          <FormField
            labelName='Your Name *'
            placeholder='chola kuboko'
            inputType='text'
            value={form.name}
            handleChange={() => { }}
          />
          <FormField
            labelName='Campaign Title *'
            placeholder='Write title for campaign'
            inputType='text'
            value={form.title}
            handleChange={() => { }}
          />
        </div>
        <div className='flex w-full'>
          <FormField
            labelName='Story *'
            placeholder='Write title story'
            isTextArea
            value={form.description}
            handleChange={() => { }}
          />
        </div>
        <div className='justify-center w-full flex items-center gap-4'>
          <a>
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="4.5em"
              width="4.5em"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16zm-3.5-6H14a.5.5 0 100-1h-4a2.5 2.5 0 110-5h1V6h2v2h2.5v2H10a.5.5 0 100 1h4a2.5 2.5 0 110 5h-1v2h-2v-2H8.5v-2z" />
            </svg>
          </a>
          <p>You will get 100% of the raised amount</p>
        </div>
      </form>
    </div>
  )
}

export default Create