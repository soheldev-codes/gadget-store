type Props = {
  price: number;
  discountPrice?: number;
};

export default function ProductPrice({
  price,
  discountPrice,
}: Props) {
  const currentPrice = discountPrice ?? price;

  const discount =
    discountPrice && discountPrice < price
      ? Math.round(((price - discountPrice) / price) * 100)
      : 0;

  return (
    <div className="space-y-1">
      <div className="flex items-center gap-3">
        <span className="text-2xl font-bold text-blue-600">
          ৳{currentPrice.toLocaleString()}
        </span>

        {discountPrice && (
          <span className="text-base text-slate-400 line-through">
            ৳{price.toLocaleString()}
          </span>
        )}
      </div>

      {discount > 0 && (
        <p className="text-sm font-medium text-emerald-600">
          Save {discount}%
        </p>
      )}
    </div>
  );
}