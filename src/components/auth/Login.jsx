import React from "react";
import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import SubmitButton from "../form/SubmitButton";
import { Link } from "react-router-dom";
import CustomLink from "../CustomLink";

const sendingData = "http://localhost:8080/sign-in";

const Login = () => {
  return (
    <Container className="flex justify-center items-center ">
      <div className=" bg-primary h-96 w-8/12 lg:w-3/12  flex justify-center items-center flex-col">
        <Title>Login</Title>
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
          <SubmitButton value="
          Login" />

          <div className="flex justify-between">
           <CustomLink to="/auth/forget-password">Forget Password</CustomLink>
           <CustomLink to="/auth/sign-up">Sign Up</CustomLink>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default Login;
