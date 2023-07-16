"use client";

import React from "react";
import { SigninLayout } from "../../styles/auth";
import SignInForm from "./signin_form";

const SignIn: React.FC = () => {
  return (
    <SigninLayout>
      Sign in page
      <SignInForm />
    </SigninLayout>
  );
};

export default SignIn;
