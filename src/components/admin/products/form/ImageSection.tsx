"use client";

import Image from "next/image";
import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { FiImage, FiUploadCloud } from "react-icons/fi";

export default function ImageSection() {
  const { register } = useFormContext();

  const [thumbnailPreview, setThumbnailPreview] =
    useState<string | null>(null);

  const [galleryPreview, setGalleryPreview] =
    useState<string[]>([]);

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <h3 className="text-xl font-semibold">
        Product Images
      </h3>

      <p className="mt-2 text-sm text-slate-500">
        Upload product thumbnail and gallery.
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* Thumbnail */}

        <div>
          <label className="mb-3 block font-medium">
            Thumbnail
          </label>

          <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-10 hover:border-blue-600">
            <FiUploadCloud
              size={40}
              className="text-blue-600"
            />

            <p className="mt-4 font-medium">
              Upload Thumbnail
            </p>

            <input
              type="file"
              accept="image/*"
              className="hidden"
              {...register("thumbnail")}
              onChange={(e) => {
                const file =
                  e.target.files?.[0];

                if (!file) return;

                setThumbnailPreview(
                  URL.createObjectURL(file)
                );
              }}
            />
          </label>
        </div>

        {/* Gallery */}

        <div>
          <label className="mb-3 block font-medium">
            Gallery
          </label>

          <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-slate-300 bg-slate-50 px-6 py-10 hover:border-blue-600">
            <FiImage
              size={40}
              className="text-blue-600"
            />

            <p className="mt-4 font-medium">
              Upload Gallery
            </p>

            <input
              type="file"
              multiple
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const files = Array.from(
                  e.target.files || []
                );

                setGalleryPreview(
                  files.map((file) =>
                    URL.createObjectURL(file)
                  )
                );
              }}
            />
          </label>
        </div>
      </div>

      {/* Preview */}

      <div className="mt-10">
        <h4 className="mb-4 font-semibold">
          Image Preview
        </h4>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
          {thumbnailPreview && (
            <div className="relative aspect-square overflow-hidden rounded-xl border">
              <Image
                src={thumbnailPreview}
                alt="thumbnail"
                fill
                className="object-cover"
              />
            </div>
          )}

          {galleryPreview.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-xl border"
            >
              <Image
                src={image}
                alt="gallery"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}