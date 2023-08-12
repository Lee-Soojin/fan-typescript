"use client";

import React from "react";
import CutsFrame from "./cuts_frame";
import PolaroidFrame from "./polaroid_frame";
import { CreatePageLayout } from "@/styles/main";

type CreatePhotoPageProps = {
  params: { mode: ["polaroid", 1 | 2 | 3] | ["cuts", "4x1" | "3x1" | "4x2"] };
};

const CreatePhotoPage = ({ params }: CreatePhotoPageProps) => {
  console.log(params.mode);

  return (
    <CreatePageLayout>
      {params.mode[0] === "polaroid" && <PolaroidFrame mode={params.mode[1]} />}
      {params.mode[0] === "cuts" && <CutsFrame mode={params.mode[1]} />}
    </CreatePageLayout>
  );
};

export default CreatePhotoPage;
