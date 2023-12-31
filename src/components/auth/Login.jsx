import Container from "../Container";
import Title from "../form/Title";
import FormInput from "../form/FormInput";
import SubmitButton from "../form/SubmitButton";
import CustomLink from "../CustomLink";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useNotification } from "../../hooks";
import { isValidEmail } from "../../utils/helper";

const sendingData = "http://localhost:8080/sign-in";

const validateUserInfo = ({ email, password }) => {

  if (!email.trim(isValidEmail))
    return { ok: false, error: "Email is missing!" };
  if (!isValidEmail.test(email)) return { ok: false, error: "Invalid email!" };

  if (!password.trim()) return { ok: false, error: "Password is missing!" };
  if (password.length < 8)
    return { ok: false, error: "Password must be 8 characters long!" };

  return { ok: true };
};

const Login = () => {
  const negative = useNavigate()
  const { updateNotification } = useNotification();
  const { handleLogin, authInfo } = useAuth();
  const {isPending,isLoggedIn} = authInfo;
  const [userInfo, setUserInfo] = useState({
    email: "", 
    password: "",
  });
  
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { ok, error } = validateUserInfo(userInfo);

    if (!ok) return updateNotification("error", error);
    handleLogin(userInfo.email,userInfo.password)
  };

  useEffect(()=>{
    // we want to move our user to somewhere else
    if(isLoggedIn) negative('/')

  },[isLoggedIn]);

  return (
    <Container className="flex justify-center items-center ">
      <div className=" bg-primary h-96 w-8/12 lg:w-3/12  flex justify-center items-center flex-col rounded">
        <Title>Login</Title>
        <form
          onSubmit={handleSubmit}
          action={sendingData}
          method="POST"
          className="text-white w-4/6 space-y-6"
        >
          <FormInput
            value={userInfo.email}
            onChange={handleChange}
            label="Email"
            placeholder="jatinsharma2231@gmail.com"
            name="email"
          />

          <FormInput
            onChange={handleChange}
            value={userInfo.password}
            label="Password"
            placeholder="********"
            type="password"
            name="password"
          />

          <SubmitButton
            value="
          Login"
          busy={isPending}
          />

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
