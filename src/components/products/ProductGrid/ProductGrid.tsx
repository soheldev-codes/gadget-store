import ProductCard from "../ProductCard";


const products = [
  {
    id: 1,
    title: "Logitech G Pro X Superlight Mouse",
    slug: "logitech-g-pro-x-superlight",
    category: "Mouse",
    brand: "Logitech",
    image: "/images/products/mouse-1.png",
    price: 12999,
    oldPrice: 14999,
    rating: 4.9,
    reviews: 245,
    stock: 20,
    badge: "-15%",
  },
  {
    id: 2,
    title: "Redragon K617 RGB Keyboard",
    slug: "redragon-k617",
    category: "Keyboard",
    brand: "Redragon",
    image: "/images/products/keyboard-1.png",
    price: 3999,
    oldPrice: 4999,
    rating: 4.8,
    reviews: 185,
    stock: 14,
    badge: "-20%",
  },
  {
    id: 3,
    title: "Sony WH-1000XM5 Headphone",
    slug: "sony-wh1000xm5",
    category: "Headphone",
    brand: "Sony",
    image: "/images/products/headphone-1.png",
    price: 39999,
    oldPrice: 42999,
    rating: 5,
    reviews: 321,
    stock: 8,
    badge: "-8%",
  },
  {
    id: 4,
    title: "Apple Watch Series 10",
    slug: "apple-watch-series-10",
    category: "Watch",
    brand: "Apple",
    image: "/images/products/watch-1.png",
    price: 58999,
    oldPrice: 61999,
    rating: 4.9,
    reviews: 112,
    stock: 5,
    badge: "-5%",
  },
];

export default function ProductGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}