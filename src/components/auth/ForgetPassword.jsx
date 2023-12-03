import React from 'react'
import FormInput from '../form/FormInput'
import Title from '../form/Title'
import Container from '../Container'
import SubmitButton from '../form/SubmitButton'
import CustomLink from '../CustomLink'

const ForgetPassword = () => {
  return (
<Container className="flex justify-center items-center ">
      <div className=" bg-primary h-96 w-8/12 lg:w-3/12  flex justify-center items-center flex-col rounded">
        <Title>Please Enter Your Email</Title>
        <form
          className="text-white w-4/6 space-y-6"
        >
          <FormInput
            label="Email"
            placeholder="jatinsharma2231@gmail.com"
            name="email"
          />
          <SubmitButton value="Send Link" />

          <div className="flex justify-between">
           <CustomLink to="/auth/login">Login</CustomLink>
           <CustomLink to="/auth/sign-up">Sign Up</CustomLink>
          </div>
        </form>
      </div>
    </Container>  )
}

export default ForgetPassword