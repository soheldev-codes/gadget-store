"use server";

import cloudinary from "@/lib/cloudinary";

export async function uploadImage(
  formData: FormData,
  folder = "products"
) {
  const file = formData.get("image") as File;

  if (!file) {
    throw new Error("Image is required.");
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const base64 = `data:${file.type};base64,${buffer.toString("base64")}`;

  const result = await cloudinary.uploader.upload(base64, {
    folder,
  });

  return {
    url: result.secure_url,
    publicId: result.public_id,
  };
}