import React from 'react'

const FormInput = ({name,label,placeholder,...rest}) => {
  return (
    <div className="flex flex-col-reverse">
    <input
      id={name}
      name={name}
      className="bg-transparent  rounded border-2 dark:border-dark-subtle border-light-subtle dark:focus:border-white focus:border-primary w-full text-sm outline-none p-1 dark:text-white peer transition mt-1"
      placeholder={placeholder}
      {...rest}
    />
    <label
      className="font-semibold dark:text-dark-subtle text-light-subtle dark:peer-focus:text-white peer-focus:text-primary  transition self-start"
      htmlFor={name}
    >
      {label}
    </label>
  </div>  )
}

export default FormInput