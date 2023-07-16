"use client";

import React from "react";
import { signIn } from "next-auth/react";

const Home: React.FC = () => {
  const handleSignIn = async () => {
    await signIn();
  };

  return (
    <div>
      <button onClick={handleSignIn}>로그인</button>
    </div>
  );
};

export default Home;
