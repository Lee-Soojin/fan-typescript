"use client";

import React from "react";
import { SigninLayout } from "../../styles/auth";
import SignInForm from "./signin_form";

const SignIn: React.FC = () => {
  return (
    <SigninLayout>
      <h1>my photo</h1>
      <SignInForm />
    </SigninLayout>
  );
};

export default SignIn;
