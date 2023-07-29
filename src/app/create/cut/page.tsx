"use client";

import { CreatePageLayout, OptionBox } from "@/styles/main";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CreateCutPage: React.FC = () => {
  return (
    <CreatePageLayout>
      <OptionBox>
        <div>
          <Image src="/images/4_1cut.png" alt="cut-photo" fill={true} />
        </div>
        <Link href="/create/cut4x1">세로 4컷</Link>
      </OptionBox>
      <OptionBox>
        <div>
          <Image src="/images/3_1cut.png" alt="cut-photo" fill={true} />
        </div>
        <Link href="/create/cut3x1">세로 3컷</Link>
      </OptionBox>
      <OptionBox style={{ border: "none" }}>
        <div>
          <Image src="/images/4_2cut.png" alt="cut-photo" fill={true} />
        </div>
        <Link href="/create/cut4x2">4X2컷</Link>
      </OptionBox>
    </CreatePageLayout>
  );
};
export default CreateCutPage;
