import React from 'react'

const SubmitButton = ({value}) => {
  return (
    <input className="bg-yellow-500 font-semibold text-black py-1 px-2 rounded w-full text-center cursor-pointer" type='submit' 
    value={value}
    />
  )
}

export default SubmitButton