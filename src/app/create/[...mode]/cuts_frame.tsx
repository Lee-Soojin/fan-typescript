"use client";

import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
import { CameraIcon, ImageIcon } from "@/styles/icon";
import { ImageEditorBox, CreateCutBox } from "@/styles/main";
import ImageEdtor from "./image_editor";

type CreatePhotoPageProps = {
  mode: "4x1" | "4x2" | "3x1";
};

const CutsFrame = ({ mode }: CreatePhotoPageProps) => {
  const [frameColor, setFrameColor] = useState<string | null>(null);
  const [cutImageUrl, setCutImageUrl] = useState<string[] | null>(null);
  const [frameImageUrl, setFrameImageUrl] = useState<string | null>(null);
  const [uploadedCutImages, setUploadedCutImages] = useState<File[] | null>(
    null
  );

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

  const handleFrameStyle = (type: string, val: string) => {
    if (type === "image") {
      setFrameImageUrl(val);
      setFrameColor(null);
    } else {
      setFrameColor(val);
      setFrameImageUrl(null);
    }
  };

  return (
    <CreateCutBox mode={"cut4X1"} $columns={1} $rows={4}>
      <div
        className="create_box__photo_grid"
        style={
          frameImageUrl
            ? { backgroundImage: "url(" + frameImageUrl + ")" }
            : frameColor
            ? { backgroundColor: frameColor }
            : {}
        }
      >
        {Array.from({ length: arrayLength }).map((x, i) =>
          cutImageUrl && cutImageUrl[i] ? (
            <div key={i} className="create_box__photo">
              <Image
                src={cutImageUrl && cutImageUrl[i]}
                alt={"cut-image" + i}
                fill={true}
                sizes="(max-width: 256px) "
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
      <ImageEdtor handleFrameStyle={handleFrameStyle} />
    </CreateCutBox>
  );
};

export default CutsFrame;
