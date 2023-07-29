"use client";

import React from "react";
import { OptionBox, StartPageLayout } from "../../styles/main";
import Image from "next/image";
import Link from "next/link";

const StartPage: React.FC = () => {
  return (
    <StartPageLayout>
      <OptionBox>
        <div>
          <Image src="/images/cutphoto.png" alt="cut-photo" fill={true} />
        </div>
        <Link href="/create/cut">3~4컷</Link>
      </OptionBox>
      <OptionBox>
        <div>
          <Image src="/images/polaroid.png" fill={true} alt="polaroid-photo" />
        </div>
        <Link href="/create/polaroid">폴라로이드</Link>
      </OptionBox>
      <OptionBox style={{ border: "none" }}>
        <div>
          <Image src="/images/cards.png" fill={true} alt="photocard-photo" />
        </div>
        <Link href="/create/photocard">포토카드</Link>
      </OptionBox>
    </StartPageLayout>
  );
};

export default StartPage;
