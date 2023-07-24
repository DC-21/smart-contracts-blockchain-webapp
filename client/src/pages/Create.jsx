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
          handleChange={()=>{}}
          />
          <FormField
          labelName='Campaign Title *'
          placeholder='Write title for campaign'
          inputType='text'
          value={form.title}
          handleChange={()=>{}}
          />
        </div>
        <div className='flex w-full'>
          <FormField
            labelName='Story *'
            placeholder='Write title story'
            isTextArea
            value={form.description}
            handleChange={() => {}}
          />
        </div>
      </form>
    </div>
  )
}

export default Create