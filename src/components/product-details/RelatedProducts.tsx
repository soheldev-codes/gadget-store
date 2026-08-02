import ProductCard from "../products/ProductCard";


const relatedProducts = [
  {
    _id: "1",
    title: "Logitech G Pro X Superlight Mouse",
    slug: "logitech-g-pro-x-superlight",
    brand: "Logitech",
    category: "Mouse",
    thumbnail: "/images/products/mouse-1.png",
    price: 14999,
    discountPrice: 12999,
    rating: 4.9,
    reviewCount: 245,
    sold: 520,
    stock: 18,
  },
  {
    _id: "2",
    title: "Redragon K617 RGB Keyboard",
    slug: "redragon-k617-rgb-keyboard",
    brand: "Redragon",
    category: "Keyboard",
    thumbnail: "/images/products/keyboard-1.png",
    price: 4999,
    discountPrice: 4299,
    rating: 4.8,
    reviewCount: 182,
    sold: 320,
    stock: 25,
  },
  {
    _id: "3",
    title: "Sony WH-1000XM5 Headphone",
    slug: "sony-wh1000xm5",
    brand: "Sony",
    category: "Headphone",
    thumbnail: "/images/products/headphone-1.png",
    price: 42999,
    discountPrice: 39999,
    rating: 5,
    reviewCount: 98,
    sold: 110,
    stock: 8,
  },
  {
    _id: "4",
    title: "Apple Watch Series 10",
    slug: "apple-watch-series-10",
    brand: "Apple",
    category: "Smart Watch",
    thumbnail: "/images/products/watch-1.png",
    price: 61999,
    discountPrice: 58999,
    rating: 4.9,
    reviewCount: 74,
    sold: 86,
    stock: 5,
  },
];

export default function RelatedProducts() {
  return (
    <section className="mt-20">
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-slate-900">
          Related Products
        </h2>

        <p className="mt-2 text-slate-600">
          You may also like these products.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {relatedProducts.map((product) => (
          <ProductCard
            key={product._id}
            product={product}
          />
        ))}
      </div>
    </section>
  );
}