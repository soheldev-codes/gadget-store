import Container from "@/components/shared/Container";

export default function TopBar() {
  return (
    <div className="hidden lg:block bg-slate-900 text-white">
      <Container>
        <div className="flex h-10 items-center justify-between text-sm">
          <p>🚚 Free Delivery Over ৳3000</p>

          <div className="flex gap-6">
            <p>📞 +8801XXXXXXXXX</p>
            <p>📧 arifgadgetstore@gmail.com</p>
          </div>
        </div>
      </Container>
    </div>
  );
}