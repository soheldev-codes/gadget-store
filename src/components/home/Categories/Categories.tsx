import CategoryHeader from "./CategoryHeader";
import CategoryCard from "./CategoryCard";
import { categories } from "./CategoryData";

export default function Categories() {
  return (
    <section className="bg-white py-20">

      <div className="container mx-auto px-4">

        <CategoryHeader />

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">

          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}

        </div>

      </div>

    </section>
  );
}