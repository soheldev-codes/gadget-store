"use client";

import { useState } from "react";
import Image from "next/image";

type Props = {
  images?: string[];
};

export default function ProductGallery({
  images = [
    "/images/products/mouse-1.png",
    "/images/products/mouse-2.png",
    "/images/products/mouse-3.png",
    "/images/products/mouse-4.png",
  ],
}: Props) {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  return (
    <div className="space-y-5">
      {/* Main Image */}

      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white p-8">
        <div className="relative aspect-square w-full">
          <Image
            src={selectedImage}
            alt="Product Image"
            fill
            priority
            className="object-contain transition duration-300 hover:scale-105"
          />
        </div>
      </div>

      {/* Thumbnail Images */}

      <div className="grid grid-cols-4 gap-4">
        {images.map((image, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelectedImage(image)}
            className={`overflow-hidden rounded-2xl border-2 bg-white p-2 transition ${
              selectedImage === image
                ? "border-blue-600"
                : "border-slate-200 hover:border-blue-400"
            }`}
          >
            <div className="relative aspect-square w-full">
              <Image
                src={image}
                alt={`Thumbnail ${index + 1}`}
                fill
                className="object-contain"
              />
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}