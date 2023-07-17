"use client";

import { GoogleIcon, KakaoIcon, NaverIcon, SigninFormBox } from "@/styles/auth";
import { signIn } from "next-auth/react";
import React from "react";

const SignInForm: React.FC = () => {
  const handleSignIn = async (mode: string) => {
    await signIn(mode);
  };

  return (
    <SigninFormBox>
      <form>
        <input type="text" placeholder="Email address" />
      </form>
      <form>
        <input type="password" placeholder="Password" />
      </form>
      <button>로그인하기</button>
      <div>
        <button onClick={() => handleSignIn("kakao")}>
          <KakaoIcon />
        </button>
        <button onClick={() => handleSignIn("google")}>
          <GoogleIcon />
        </button>
        <button onClick={() => handleSignIn("naver")}>
          <NaverIcon />
        </button>
      </div>
    </SigninFormBox>
  );
};

export default SignInForm;
