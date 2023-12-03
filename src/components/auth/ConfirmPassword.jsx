import React from "react";
import FormInput from "../form/FormInput";
import Title from "../form/Title";
import Container from "../Container";
import SubmitButton from "../form/SubmitButton";

export const ConfirmPassword = () => {
  return (
    <Container className="flex justify-center items-center ">
      <div className=" bg-primary h-96 w-8/12 lg:w-3/12  flex justify-center items-center flex-col rounded">
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
