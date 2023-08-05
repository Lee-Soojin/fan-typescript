"use client";

import { CreatePolaroidPageLayout, OptionBox } from "@/styles/main";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CreatePolaroidPage: React.FC = () => {
  return (
    <CreatePolaroidPageLayout>
      <OptionBox mode="polaroid">
        <div>
          <Image src="/images/polaroid3_5.png" alt="cut-photo" fill={true} />
        </div>
        <Link href="/create/polaroid3_5">3:5</Link>
      </OptionBox>
      <OptionBox mode="polaroid">
        <div>
          <Image src="/images/polaroid3_4.png" alt="cut-photo" fill={true} />
        </div>
        <Link href="/create/polaroid3_4">3:4</Link>
      </OptionBox>
      <OptionBox mode="polaroid" style={{ border: "none" }}>
        <div>
          <Image src="/images/polaroid1_1.png" alt="cut-photo" fill={true} />
        </div>
        <Link href="/create/polaroid1_1">1:1</Link>
      </OptionBox>
    </CreatePolaroidPageLayout>
  );
};
export default CreatePolaroidPage;
