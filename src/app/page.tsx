import { getCategories, getProducts } from "@/lib/api";

export default async function Home() {
  const [products, categories] = await Promise.all([
    getProducts(),
    getCategories(),
  ]);
  return (
    <main>
      <h1>Catálogo</h1>
      <h2>Productos</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
      <h2>Categorías:</h2>
      <ul>
        {categories.map((category) => (
          <li key={category}>
            <h3>{category}</h3>
          </li>
        ))}
      </ul>
    </main>
  );
}
