type ProductStatusBadgeProps = {
  stock: number;
};

export default function ProductStatusBadge({
  stock,
}: ProductStatusBadgeProps) {
  const isInStock = stock > 0;

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        isInStock
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {isInStock ? "In Stock" : "Out of Stock"}
    </span>
  );
}
