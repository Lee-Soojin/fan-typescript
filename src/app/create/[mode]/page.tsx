"use client";

import React, { ChangeEvent, useEffect, useState } from "react";
import { CameraIcon, ImageIcon } from "@/styles/icon";
import { CreateCustomBox, CreateCutBox, CreatePageLayout } from "@/styles/main";
import Image from "next/image";

type CreatePhotoPageProps = {
  params: { mode: "cut4x1" | "cut3x1" | "cut4x2" };
};

const CreatePhotoPage = ({ params }: CreatePhotoPageProps) => {
  const [uploadedFrameImg, setUploadedFrameImg] = useState<File | null>(null);
  const [frameImageUrl, setFrameImageUrl] = useState<string | null>(null);
  const [uploadedCutImages, setUploadedCutImages] = useState<File[] | null>(
    null
  );
  const [cutImageUrl, setCutImageUrl] = useState<string[] | null>(null);
  const modeAble = {
    cut4x1: [1, 4],
    cut4x2: [2, 2],
    cut3x1: [1, 3],
  };
  const arrayLength = modeAble[params.mode][0] * modeAble[params.mode][1];

  const handleChangeFrameImage = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      setUploadedFrameImg(file);
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;
        setFrameImageUrl(imageUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChangeCutImage = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;
    const fileList = Array.from(files);
    setUploadedCutImages(fileList);
    fileList.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        const imageUrl = event.target?.result as string;
        setCutImageUrl((prev) =>
          prev && prev.length > 0 ? [...prev, imageUrl] : [imageUrl]
        );
      };
      reader.readAsDataURL(file);
    });
  };

  return (
    <CreatePageLayout>
      <CreateCutBox
        mode={params.mode}
        $columns={modeAble[params.mode][0]}
        $rows={modeAble[params.mode][1]}
      >
        <div
          className="create_box__photo_grid"
          style={{ backgroundImage: "url(" + frameImageUrl + ")" }}
        >
          {Array.from({ length: arrayLength }).map((x, i) =>
            cutImageUrl && cutImageUrl[i] ? (
              <div key={i} className="create_box__photo">
                <Image
                  src={cutImageUrl && cutImageUrl[i]}
                  alt={"cut-image" + i}
                  fill={true}
                  sizes="(max-width: 256px)"
                />
              </div>
            ) : (
              <div key={i}>
                <label htmlFor={"image-" + i}>
                  <ImageIcon />
                </label>
                <input
                  type="file"
                  id={"image-" + i}
                  name={"image-" + i}
                  accept=".jpg, .jpeg, .png, .svg, .avif"
                  onChange={handleChangeCutImage}
                  multiple
                />
              </div>
            )
          )}
        </div>
        <CreateCustomBox>
          <button>이미지 생성</button>
          <label
            htmlFor="select-color"
            className="create_custom_box__select-color"
          >
            <Image
              src="/images/gradient.png"
              alt="select-color"
              fill={true}
              sizes="(max-width: 36px)"
            />
          </label>
          <input type="color" id="select-color" />
          <label
            htmlFor="frame-image"
            className="create_custom_box__frame-image"
          >
            <CameraIcon />
          </label>
          <input
            type="file"
            id="frame-image"
            onChange={handleChangeFrameImage}
          />
        </CreateCustomBox>
      </CreateCutBox>
    </CreatePageLayout>
  );
};

export default CreatePhotoPage;
