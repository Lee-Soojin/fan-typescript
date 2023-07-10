import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <div>
      <Link href="/signin">시작하기</Link>
    </div>
  );
};

export default Home;
