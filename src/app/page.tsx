import { ProductGrid } from "@/components/ProductGrid";
import { getCategories, getProducts } from "@/lib/api";

export default async function Home() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        Catálogo de Productos
      </h1>
      <h2 className="mt-8 text-xl font-semibold text-slate-900">Categorías</h2>
      <ul className="mt-2 flex flex-wrap gap-2">
        {categories.map((category) => (
          <li
            key={category}
            className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700"
          >
            {category}
          </li>
        ))}
      </ul>
      <div className="mt-4">
        <ProductGrid products={products} />
      </div>
    </main>
  );
}
