import type { Product } from "@/types/product";
import type { Category } from "@/types/category";

const BASE_URL = process.env.FAKESTORE_API_URL ?? "https://fakestoreapi.com";

// FakeStore responde 200 con cuerpo vacío cuando el ID no existe
// Por eso se verifica como texto antes de convertir a JSON
async function get<T>(path: string): Promise<T | null> {
  const res = await fetch(`${BASE_URL}/${path}`, {
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`Error al cargar ${path} (HTTP ${res.status})`);
  }
  const text = await res.text();
  if (text.trim() === "") {
    return null;
  }
  return JSON.parse(text) as T;
}

export async function getProducts(): Promise<Product[]> {
  const products = await get<Product[]>("products");
  if (!products) {
    throw new Error("No se cargaron productos");
  }
  return products;
}

export async function getCategories(): Promise<Category[]> {
  const categories = await get<Category[]>("products/categories");
  if (!categories) {
    throw new Error("No se cargaron categorías");
  }
  return categories;
}

export function getProduct(id: number): Promise<Product | null> {
  return get<Product>(`products/${id}`);
}
