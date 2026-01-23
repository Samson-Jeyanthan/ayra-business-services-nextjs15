"use client";

import Image from "next/image";
import { useMedia } from "@/lib/hooks/useMedia";
import { IImageMediaProps } from "@/types/utils.types";
import { CircleXIcon, Pencil } from "lucide-react";
import { ChangeEvent, useEffect, useRef, useState } from "react";

type Props = {
  fieldChange: (e: unknown) => void;
  previousMedia: IImageMediaProps;
  setPreviousMedia: (media: IImageMediaProps) => void;
};

const MediaInput = ({
  fieldChange,
  previousMedia,
  setPreviousMedia,
}: Props) => {
  const photoRef = useRef<HTMLInputElement>(null);
  const { handleImageInput, error, media, setMedia } = useMedia();
  const [selectedItem, setSelectedItem] = useState({
    isURL: previousMedia ? true : false,
    index: 0,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    handleImageInput({
      e,
      isMultiple: false,
      acceptFileType: ["image/jpeg", "image/png", "image/webp", "image/jpg"],
      filesLimit: 1,
    });
    setSelectedItem({ isURL: false, index: 0 });
    fieldChange(e.target.files);
  };

  // useEffect(() => {
  //   fieldChange(media);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [media]);

  const handleInputBtn = () => {
    photoRef.current?.click();
  };

  return (
    <div className="">
      <input
        type="file"
        ref={photoRef}
        hidden
        onChange={handleInputChange}
        accept="image/png"
      />

      {media?.fileName === "" && (
        <div
          className="flex-center border rounded-lg border-dashed border-light-400 p-6 py-14 text-sm cursor-pointer w-[80%] text-light-100/60"
          onClick={handleInputBtn}
        >
          Click here to upload the image
        </div>
      )}

      {media.preview && (
        <div className="flex gap-2 items-start">
          <Image
            src={media.preview}
            alt="business_logo"
            width={512}
            height={512}
            className={`${media.preview ? "h-36 w-56 rounded-lg" : "size-24"} object-cover`}
          />
          <div className="flex flex-col gap-1">
            <CircleXIcon strokeWidth="1.5px" size="20px" cursor="pointer" />

            <Pencil
              className="cursor-pointer size-5"
              strokeWidth="1.5px"
              onClick={handleInputBtn}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaInput;
