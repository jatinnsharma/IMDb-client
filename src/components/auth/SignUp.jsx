import React, { useState } from "react";
import FormInput from "../form/FormInput";
import SubmitButton from "../form/SubmitButton";
import Container from "../Container";
import Title from "../form/Title";
import CustomLink from "../CustomLink";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    name:"",
    email:"",
    password:""
  });

  const handleChange = ({target}) =>{
    const {name,value} = target;
    setUserInfo({...userInfo,[name]:value})
  }
  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(userInfo)
  }

  const { name, email, password } = userInfo;
  return (
    <Container className="flex justify-center items-center ">
      <div className=" bg-primary h-[65vh] w-8/12 lg:w-3/12  flex justify-center items-center flex-col rounded">
        <Title>Sign Up</Title>
        <form onSubmit={handleSubmit} className="text-white w-4/6 space-y-6">
          <FormInput
            label="Name"
            value={name}
            placeholder="Jatin Sharma"
            name="name"
            onChange={handleChange}
          />
          
          <FormInput
            label="Email"
            placeholder="jatinsharma2231@gmail.com"
            name="email"
            value={email}
            onChange={handleChange}
          />

          <FormInput
            label="Password"
            placeholder="********"
            name="password"
            value={password}
            type='password'
            onChange={handleChange}
          />
          <SubmitButton value="Sign Up" />

          <div className="flex justify-between">
            <CustomLink to="/auth/forget-password">Forget Password</CustomLink>

            <CustomLink to="/auth/login">Login</CustomLink>
          </div>
        </form>
      </div>
    </Container>
  );
};

export default SignUp;
