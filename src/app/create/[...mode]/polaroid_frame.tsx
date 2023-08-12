"use client";

import React from "react";
import { PolaroidFrameBox } from "@/styles/main";

type CreatePhotoPageProps = {
  mode: 1 | 2 | 3;
};

const PolaroidFrame = ({ mode }: CreatePhotoPageProps) => {
  console.log(mode);

  return <PolaroidFrameBox></PolaroidFrameBox>;
};

export default PolaroidFrame;
