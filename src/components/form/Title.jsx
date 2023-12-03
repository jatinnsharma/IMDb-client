import React from 'react'

const Title = ({children}) => {
  return (
    <h1 className='text-2xl pb-6 dark:text-white text-primary font-bold text-center '>{children}</h1>
  )
}

export default Title