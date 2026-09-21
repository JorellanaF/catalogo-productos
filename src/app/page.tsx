import { CategoryFilter } from "@/components/CategoryFilter";
import { ProductGrid } from "@/components/ProductGrid";
import { SearchBar } from "@/components/SearchBar";
import { getCategories, getProducts } from "@/lib/api";
import { filterProducts } from "@/lib/filters";

export default async function Home({ searchParams }: PageProps<"/">) {
  const { q, categoria } = await searchParams;
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);

  const filtered = filterProducts(products, {
    q: typeof q === "string" ? q : undefined,
    categoria: typeof categoria === "string" ? categoria : undefined,
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">
        Catálogo de Productos
      </h1>

      <div className="mt-6 max-w-md">
        <SearchBar />
      </div>

      <div className="mt-4">
        <CategoryFilter categories={categories} />
      </div>

      <p className="mt-6 text-sm text-slate-500">
        Mostrando {filtered.length} de {products.length} productos
      </p>

      <div className="mt-4">
        {filtered.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white p-12 text-center">
            <p className="text-slate-900 font-medium">
              No se encontraron productos
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Prueba con otro término de búsqueda o selecciona otra categoría.
            </p>
          </div>
        ) : (
          <ProductGrid products={filtered} />
        )}
      </div>
    </main>
  );
}
