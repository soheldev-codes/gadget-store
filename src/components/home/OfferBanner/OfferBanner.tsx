import Container from "@/components/shared/Container";
import OfferSlider from "./OfferSlider";

export default function OfferBanner() {
  return (
    <section className="py-20">
      <Container>
        <div className="mb-10 text-center">
          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            Special Offers
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Grab Today's Best Deals
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-600">
            Discover exclusive discounts on premium gadgets. Limited-time
            offers on headphones, keyboards, smart watches, earbuds, and more.
          </p>
        </div>

        <OfferSlider />
      </Container>
    </section>
  );
}