import React from 'react'
import {ImSpinner3} from 'react-icons/im'

const SubmitButton = ({value,busy}) => {
  return (
    <button className="bg-yellow-500 font-semibold text-black h-10 flex justify-center items-center px-2 rounded w-full text-center cursor-pointer" type='submit' 
    
    >
      {busy? <ImSpinner3 className='animate-spin' /> : value}
    </button>
  )
}

export default SubmitButton