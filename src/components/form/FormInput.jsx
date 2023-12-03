import React from 'react'

const FormInput = ({name,label,placeholder,...rest}) => {
  return (
    <div className="flex flex-col-reverse">
    <input
      id={name}
      name={name}
      className="bg-transparent  rounded border-2 border-dark-subtle focus:border-white w-full text-sm outline-none p-1 text-white peer transition mt-1"
      placeholder={placeholder}
      {...rest}
    />
    <label
      className="font-semibold text-dark-subtle peer-focus:text-white transition self-start"
      htmlFor={name}
    >
      {label}
    </label>
  </div>  )
}

export default FormInput