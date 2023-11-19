import React from 'react'
import Container from '../Container'

const Signin = () => {
  return (
    <Container className='flex justify-center items-center '>
       <div className='text-white bg-primary h-96 w-3/12 flex justify-center items-center'>
        <form action="">
          <label htmlFor="Email">Name</label>
          <input type="text" placeholder='Enter your Name'/><br/><br/>
          <label htmlFor="Email">Email</label>
          <input type="email" placeholder='Enter your email' /><br/><br/>
          <label htmlFor="password">Passsword</label>
          <input type="password" placeholder='Enter your password'/><br/><br/>
        </form>
        </div>
    </Container>
  )
}

export default Signin