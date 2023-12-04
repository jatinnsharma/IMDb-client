import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "../form/FormInput";
import SubmitButton from "../form/SubmitButton";
import Container from "../Container";
import Title from "../form/Title";
import CustomLink from "../CustomLink";
import { createUser } from "../../api/auth";

const validateUserInfo = ({ name, email, password }) => {
  const isValidEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const isValidName = /^[a-z A-Z]+$/;

  if (!name.trim()) return { ok: false, error: "Name is missing!" };
  if (!isValidName.test(name)) return { ok: false, error: "Invalid name!" };

  if (!email.trim(isValidEmail))
    return { ok: false, error: "Email is missing!" };
  if (!isValidEmail.test(email)) return { ok: false, error: "Invalid email!" };

  if (!password.trim()) return { ok: false, error: "Password is missing!" };
  if (password.length < 8)
    return { ok: false, error: "Password must be 8 characters long!" };

  return { ok: true };
};

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { ok, error } = validateUserInfo(userInfo);

    if (!ok) return console.log(error);
    const response = await createUser(userInfo);
    if (response.error) return console.log(response.error);

    navigate("/auth/verification", {
      state: { user: response.user },
      replace: true,
    });
    console.log(response.user);
  };

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
            type="password"
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
