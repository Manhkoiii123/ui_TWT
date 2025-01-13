import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";

interface ImageCropModalProps {
  src: string;
  onCropComplete: (croppedImage: File) => void;
  onClose: () => void;
}

const ImageCropModal: React.FC<ImageCropModalProps> = ({
  src,
  onCropComplete,
  onClose,
}) => {
  const [crop, setCrop] = useState<Crop>({
    unit: "%",
    width: 100,
    height: 100,
    x: 0,
    y: 0,
  });
  const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);

  const handleCropComplete = async () => {
    if (imageRef && crop.width && crop.height) {
      const croppedImage = await getCroppedImg(imageRef, crop);
      onCropComplete(croppedImage);
    }
  };

  const getCroppedImg = (
    image: HTMLImageElement,
    crop: Crop
  ): Promise<File> => {
    const canvas = document.createElement("canvas");
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    canvas.width = crop.width!;
    canvas.height = crop.height!;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      ctx.drawImage(
        image,
        crop.x! * scaleX,
        crop.y! * scaleY,
        crop.width! * scaleX,
        crop.height! * scaleY,
        0,
        0,
        crop.width!,
        crop.height!
      );
    }

    return new Promise((resolve) => {
      canvas.toBlob((blob) => {
        if (blob) {
          const file = new File([blob], "cropped-image.png", {
            type: "image/png",
          });
          resolve(file);
        }
      }, "image/png");
    });
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-[1000]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 flex flex-col items-center gap-2.5">
        <ReactCrop
          crop={crop}
          onChange={(newCrop) => setCrop(newCrop)}
          aspect={16 / 9}
        >
          <Image
            src={src}
            alt="Crop me"
            width={500}
            height={300}
            onLoad={(e) => setImageRef(e.currentTarget)}
          />
        </ReactCrop>
        <div className="flex gap-2">
          <Button onClick={handleCropComplete}>Cắt ảnh</Button>
          <Button onClick={onClose}>Đóng</Button>
        </div>
      </div>
    </div>
  );
};

export default ImageCropModal;
