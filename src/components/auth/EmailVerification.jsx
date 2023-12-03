import React, { useEffect, useRef, useState } from "react";
import Container from "../Container";
import Title from "../form/Title";
import SubmitButton from "../form/SubmitButton";

const OTP_LENGTH = 6;
const OTP_BOX = new Array(OTP_LENGTH).fill("");
const EmailVerification = () => {

    const [otp, setOtp] = useState(OTP_BOX);
    const [activeOtpIndex,setActiveOtpIndex] = useState(0);

    const inputRef = useRef();

    const focusNextInputField=(index)=>{
        setActiveOtpIndex(index+1)
    }

    const focusPrevInputField = (index)=>{
        let nextIndex;
        const diff = index - 1;
        // cannot be negative
        nextIndex = diff !== 0 ? diff : 0;

        setActiveOtpIndex(nextIndex)
    }
    const handleOtpChange = ({target},index)=>{
        const {value} = target;
        const newOtp = [...otp]
        newOtp[index] = value.substring(value.length-1,value.length);
        
        if(!value) focusPrevInputField(index);
        else focusNextInputField(index);

        setOtp([...newOtp]);
    }

    const handleKeyDown = ({key},index)=>{
        if(key==='Backspace'){
            focusPrevInputField(index)
        }
    }

    useEffect(()=>{
        inputRef.current?.focus()
    },[activeOtpIndex])

  return (
    <Container className="flex justify-center items-center ">
      <div className=" bg-primary h-64 w-8/12 lg:w-3/12  flex justify-center items-center flex-col rounded">
        <form className="text-white space-y-6">
          <div>
            <Title>
                <div className="text-xl">
                Please the OTP to verify your account
                </div>
            <p className="text-center  text-gray-600 text-base font-semibold">
              OTP has been sent to your email
            </p>
            </Title>
          </div>
          <div className="flex justify-center items-center space-x-4">
            {otp.map((_, index) => {
              return (
                <input
                ref={activeOtpIndex===index ? inputRef : null}
                key={index}
                value={otp[index] || ""}
                onChange={(e)=>handleOtpChange(e,index)}
                onKeyDown={(e)=>handleKeyDown(e,index)}
                type="number"
                 className="w-10 h-10 border-2 border-gray-400 focus:border-white rounded bg-transparent outline-none text-center text-white font-semibold text-xl" />

              );
            })}
          </div>
          <SubmitButton value="Send Link" />
        </form>
      </div>
    </Container>
  );
};

export default EmailVerification;
