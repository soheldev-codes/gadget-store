import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";

const cartItems = [
  {
    id: "1",
    title: "Logitech G Pro X Superlight Mouse",
    slug: "logitech-g-pro-x-superlight",
    thumbnail: "/images/products/mouse-1.png",
    price: 14999,
    discountPrice: 12999,
    quantity: 1,
    stock: 15,
  },
  {
    id: "2",
    title: "Redragon K617 RGB Keyboard",
    slug: "redragon-k617-rgb-keyboard",
    thumbnail: "/images/products/keyboard-1.png",
    price: 4999,
    discountPrice: 4299,
    quantity: 2,
    stock: 10,
  },
];

export default function CartPage() {
  return (
    <main className="py-16">
      <div className="mx-auto max-w-7xl px-4">

        <h1 className="mb-10 text-4xl font-bold">
          Shopping Cart
        </h1>

        <div className="grid gap-10 lg:grid-cols-[1fr_360px]">

          <div className="space-y-6">
            {cartItems.map((item) => (
              <CartItem
                key={item.id}
                item={item}
              />
            ))}
          </div>

          <CartSummary />

        </div>

      </div>
    </main>
  );
}