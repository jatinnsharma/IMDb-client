import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import FormInput from "../form/FormInput";
import Title from "../form/Title";
import Container from "../Container";
import SubmitButton from "../form/SubmitButton";
import { ImSpinner3 } from "react-icons/im";

export const ConfirmPassword = () => {
  const [isVerifying,setVerifying] = useState(true)
  const [searchParams] = useSearchParams()
  const token = searchParams.get('token')
  const id = searchParams.get('id')

  // isValid , isVerifying , !isValid

  if(isVerifying) return (
    <Container className="flex justify-center items-center ">
      <div className=" w-10/12 lg:w-5/12  flex justify-center gap-3 ">
        <Title className="pb-6">Please wait we are verifying your token!</Title>
      <ImSpinner3 className='animate-spin text-white text-4xl' />
        </div>
        </Container> 
  )

  return (
    <Container className="flex justify-center items-center ">
      <div className=" bg-primary h-96 w-8/12 lg:w-4/12  flex justify-center items-center flex-col rounded">
        <Title className="pb-6">Enter Your New Password</Title>
        <form className="text-white w-4/6 space-y-6">
          <FormInput
            label="New Password"
            placeholder="********"
            name="password"
            type="password"
          />
          <FormInput
            label="Confirm Password"
            placeholder="********"
            name="confirmPassword"
            type="password"
          />
          <SubmitButton value="Confirm Password" />
        </form>
      </div>
    </Container>
  );
};
