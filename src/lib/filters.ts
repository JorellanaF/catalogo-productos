import type { Product } from "@/types/product";

export interface ProductFilters {
  q?: string;
  categoria?: string;
}

// Devuelve los productos según los filtros aplicados
export function filterProducts(
  products: Product[],
  filters: ProductFilters,
): Product[] {
  return products.filter((product) => {
    const matchesQuery =
      !filters.q ||
      product.title.toLowerCase().includes(filters.q.trim().toLowerCase());

    const matchesCategory =
      !filters.categoria || product.category === filters.categoria;

    return matchesQuery && matchesCategory;
  });
}
