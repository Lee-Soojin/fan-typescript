"use client";

import React from "react";
import { CameraIcon, ImageIcon } from "@/styles/icon";
import { CreateCustomBox, CreateCutBox, CreatePageLayout } from "@/styles/main";
import Image from "next/image";

type CreatePhotoPageProps = {
  params: { mode: "cut4x1" | "cut3x1" | "cut4x2" };
};

const CreatePhotoPage = ({ params }: CreatePhotoPageProps) => {
  const modeAble = {
    cut4x1: [1, 4],
    cut4x2: [2, 2],
    cut3x1: [1, 3],
  };
  const arrayLength = modeAble[params.mode][0] * modeAble[params.mode][1];

  return (
    <CreatePageLayout>
      <CreateCutBox
        mode={params.mode}
        columns={modeAble[params.mode][0]}
        rows={modeAble[params.mode][1]}
      >
        <div className="create_box__photo_grid">
          {Array.from({ length: arrayLength }).map((x, i) => (
            <div key={i}>
              <label htmlFor="image-1">
                <ImageIcon />
              </label>
              <input
                type="file"
                id="image-1"
                name="image-1"
                accept=".jpg, .jpeg, .png"
                multiple
              />
            </div>
          ))}
        </div>
        <CreateCustomBox>
          <button>이미지 생성</button>
          <label htmlFor="select-color" id="select-color">
            <Image src="/images/gradient.png" alt="select-color" fill={true} />
          </label>
          <input type="color" id="select-color" />
          <label htmlFor="frame-image" id="frame-image">
            <CameraIcon />
          </label>
          <input type="file" id="frame-image" />
        </CreateCustomBox>
      </CreateCutBox>
    </CreatePageLayout>
  );
};

export default CreatePhotoPage;
