import React from 'react'

const FormField = ({ labelName, placeholder, inputType, isTextArea, value, handleChange }) => {
  return (
    <label className='justify-center items-center flex-1 w-full flex-col flex'>
        {labelName && (<span>{labelName}</span>)}
    </label>
  )
}

export default FormField