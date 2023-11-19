import React from 'react'

const Container = ({className,children}) => {
  return (
    <div className={'h-screen -z-1 fixed w-screen  '+className}>
        {children}
    </div>
  )
}

export default Container