import React, { useState } from 'react'
import FormInput from '../form/FormInput'
import Title from '../form/Title'
import Container from '../Container'
import SubmitButton from '../form/SubmitButton'
import CustomLink from '../CustomLink'
import { forgetPassword } from '../../api/auth'
import { isValidEmail } from '../../utils/helper'
import { useNotification } from '../../hooks'

const ForgetPassword = () => {
  const [email , setEmail] = useState('')
  const { updateNotification } = useNotification();

  const handleChange = ({ target }) => {
    const { value } = target;
    setEmail(value)
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(!isValidEmail(email)) return updateNotification('error',"Invalid Error");
    
    const {error,message} = await forgetPassword(email)
    if(error) return updateNotification('error',error);

    updateNotification('success',message);

  };

  return (
<Container className="flex justify-center items-center ">
      <div className=" bg-primary h-96 w-8/12 lg:w-3/12  flex justify-center items-center flex-col rounded">
        <Title>Please Enter Your Email</Title>
        <form
        onSubmit={handleSubmit}
          className="text-white w-4/6 space-y-6"
        >
          <FormInput onChange={handleChange}
            label="Email"
            placeholder="jatinsharma2231@gmail.com"
            name="email"
            value={email}
          />
          <SubmitButton value="Send Link" />

          <div className="flex justify-between">
           <CustomLink to="/auth/login">Login</CustomLink>
           <CustomLink to="/auth/sign-up">Sign Up</CustomLink>
          </div>
        </form>
      </div>
    </Container> 
     )
}

export default ForgetPassword