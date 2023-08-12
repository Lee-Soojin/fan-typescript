"use client";

import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { CameraIcon, ImageIcon } from "@/styles/icon";
import { CreateCustomBox, CreateCutBox } from "@/styles/main";

type CreatePhotoPageProps = {
  mode: "4x1" | "4x2" | "3x1";
};

const CutsFrame = ({ mode }: CreatePhotoPageProps) => {
  const [cutImageUrl, setCutImageUrl] = useState<string[] | null>(null);
  const [frameImageUrl, setFrameImageUrl] = useState<string | null>(null);
  const [uploadedFrameImg, setUploadedFrameImg] = useState<File | null>(null);
  const [uploadedCutImages, setUploadedCutImages] = useState<File[] | null>(
    null
  );

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
  const cutMode = {
    "4x1": [1, 4],
    "4x2": [2, 2],
    "3x1": [1, 3],
  };
  const arrayLength = cutMode[mode][0] * cutMode[mode][1];

  return (
    <CreateCutBox mode={"cut4X1"} $columns={1} $rows={4}>
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
        <label htmlFor="frame-image" className="create_custom_box__frame-image">
          <CameraIcon />
        </label>
        <input type="file" id="frame-image" onChange={handleChangeFrameImage} />
      </CreateCustomBox>
    </CreateCutBox>
  );
};

export default CutsFrame;
