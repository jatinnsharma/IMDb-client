import React from "react";
import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import SubmitButton from "../form/SubmitButton";

const sendingData = "http://localhost:8080/sign-in";

const Signin = () => {
  return (
    <Container className="flex justify-center items-center ">
      <div className=" bg-primary h-96 w-8/12 lg:w-3/12  flex justify-center items-center flex-col">
        <Title>Sign in</Title>
        <form
          action={sendingData}
          method="POST"
          className="text-white w-4/6 space-y-6"
        >
          <FormInput
            label="Email"
            placeholder="jatinsharma2231@gmail.com"
            name="email"
          />
          <FormInput label="Password" placeholder="********" name="password" />
          <SubmitButton value="Sign In" />

          <div className="flex justify-between">
            <a
              href="#"
              className="text-dark-subtle hover:text-white transition"
            >
              Forget Password
            </a>
            <a
              href="#"
              className="text-dark-subtle hover:text-white transition"
            >
              Sign Up
            </a>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Signin;
