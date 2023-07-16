"use client";

import { GoogleIcon, KakaoIcon, NaverIcon, SigninFormBox } from "@/styles/auth";
import React from "react";

const SignInForm: React.FC = () => {
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
        <button>
          <KakaoIcon />
        </button>
        <button>
          <GoogleIcon />
        </button>
        <button>
          <NaverIcon />
        </button>
      </div>
    </SigninFormBox>
  );
};

export default SignInForm;
