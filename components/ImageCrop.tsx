import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState } from "react";
import ReactCrop, { Crop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
export interface ICroppedImageReturn {
  file: File;
  width: number;
  height: number;
}
interface ImageCropModalProps {
  src: string;
  onCropComplete: (croppedImage: ICroppedImageReturn) => void;
  onClose: () => void;
  loading: boolean;
}

const ImageCropModal: React.FC<ImageCropModalProps> = ({
  src,
  onCropComplete,
  onClose,
  loading,
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
  ): Promise<{
    file: File;
    width: number;
    height: number;
  }> => {
    return new Promise((resolve, reject) => {
      if (
        crop.width === 100 &&
        crop.height === 100 &&
        crop.x === 0 &&
        crop.y === 0
      ) {
        fetch(image.src)
          .then((response) => response.blob())
          .then((blob) => {
            const file = new File([blob], `original-image.png`, {
              type: `image/png`,
            });

            resolve({
              file,
              width: image.naturalWidth,
              height: image.naturalHeight,
            });
          })
          .catch((error) => reject(error));
      } else {
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

        canvas.toBlob((blob) => {
          if (blob) {
            const file = new File([blob], `cropped-image.png`, {
              type: `image/png`,
            });

            resolve({
              file,
              width: crop.width!,
              height: crop.height!,
            });
          } else {
            reject(new Error("Failed to create blob from canvas"));
          }
        }, `image/png`);
      }
    });
  };

  return (
    <div className="fixed inset-0 bg-black/80 z-[1000]">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-5 flex flex-col items-center gap-2.5">
        <ReactCrop crop={crop} onChange={(newCrop) => setCrop(newCrop)}>
          <Image
            src={src}
            alt="Crop me"
            width={500}
            height={300}
            onLoad={(e) => setImageRef(e.currentTarget)}
          />
        </ReactCrop>
        <div className="flex gap-2">
          <Button disabled={loading} onClick={handleCropComplete}>
            Crop Image
          </Button>
          <Button onClick={onClose}>Close</Button>
        </div>
      </div>
    </div>
  );
};

export default ImageCropModal;
