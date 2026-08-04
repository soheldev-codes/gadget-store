"use client";

import { FormProvider, useForm } from "react-hook-form";

import BasicInformation from "./BasicInformation";
import ImageSection from "./ImageSection";
import InventorySection from "./InventorySection";
import PricingSection from "./PricingSection";
import ProductStatusSection from "./ProductStatusSection";
import SubmitSection from "./SubmitSection";

export default function ProductForm() {
  const methods = useForm({
    defaultValues: {
      title: "",
      slug: "",
      shortDescription: "",
      description: "",
      brand: "",
      category: "",

      price: 0,
      discountPrice: 0,
      costPrice: 0,

      stock: 0,
      lowStockAlert: 5,
      sku: "",
      warranty: 12,

      featured: false,
      trending: false,
      active: true,
      draft: false,

      thumbnail: "",
      gallery: [],
    },
  });

  return (
    <FormProvider {...methods}>
      <form className="space-y-8">
        <BasicInformation />

        <PricingSection />

        <InventorySection />

        <ImageSection />

        <ProductStatusSection />

        <SubmitSection />
      </form>
    </FormProvider>
  );
}