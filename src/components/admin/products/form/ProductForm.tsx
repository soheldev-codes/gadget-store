import BasicInformation from "./BasicInformation";
import PricingSection from "./PricingSection";
import InventorySection from "./InventorySection";
import ImageSection from "./ImageSection";
import ProductStatusSection from "./ProductStatusSection";
import SubmitSection from "./SubmitSection";

export default function ProductForm() {
  return (
    <form className="space-y-8">
      <BasicInformation />

      <PricingSection />

      <InventorySection />

      <ImageSection />

      <ProductStatusSection />

      <SubmitSection />
    </form>
  );
}