import React from 'react'

const FormField = ({ labelName, placeholder, inputType, isTextArea, value, handleChange }) => {
  return (
    <label className='justify-center items-center flex-1 w-full flex-col flex'>
        {labelName && (<span className='text-[#a4a5b8]'>{labelName}</span>)}
        {isTextArea ? (
            <textarea
            required
        value={value}
        type={inputType}
        rows={10}
        placeholder={placeholder}
        onChange={handleChange}
        className='py-[15px] px-[15px] sm:px-[25px] rounded-[5px] md:w-[886px] md:min-w-[800px] sm:min-w-[300px]'
        />
        ):(<input
        required
        value={value}
        type={inputType}
        steps='0.1'
        placeholder={placeholder}
        onChange={handleChange}
        className='py-[15px] px-[15px] sm:px-[25px] rounded-[5px] sm:min-w-[300px]'
        />)}
    </label>
  )
}

export default FormField