"use client";

import { FiTrash2 } from "react-icons/fi";

type DeleteProductButtonProps = {
  productId: string;
};

export default function DeleteProductButton({
  productId,
}: DeleteProductButtonProps) {
  const handleDelete = () => {
    console.log("Delete Product:", productId);

    // Later:
    // Open Confirmation Modal
    // Call Delete API
    // Refetch Products
  };

  return (
    <button
      type="button"
      onClick={handleDelete}
      className="flex h-10 w-10 items-center justify-center rounded-lg border border-red-200 text-red-600 transition hover:bg-red-600 hover:text-white"
    >
      <FiTrash2 size={18} />
    </button>
  );
}