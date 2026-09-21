import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProduct } from "@/lib/api";
import { formatPrice } from "@/lib/format";
import { RatingStars } from "@/components/RatingStars";

export async function generateMetadata({
  params,
}: PageProps<"/producto/[id]">): Promise<Metadata> {
  const { id } = await params;
  const product = await getProduct(Number(id));
  if (!product) {
    return { title: "Producto no encontrado" };
  }
  return {
    title: product.title,
    description: product.description.slice(0, 160),
  };
}

export default async function ProductPage({
  params,
}: PageProps<"/producto/[id]">) {
  const { id } = await params;
  const productId = Number(id);
  if (!Number.isInteger(productId) || productId <= 0) {
    notFound();
  }

  const product = await getProduct(productId);
  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Link
        href="/"
        className="text-sm font-medium text-indigo-600 hover:text-indigo-700"
      >
        Volver al catálogo
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <div className="relative h-96 rounded-xl border border-slate-200 bg-white">
          <Image
            src={product.image}
            alt={product.title}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-8"
          />
        </div>

        <div>
          <p className="text-xs uppercase tracking-wide text-slate-500">
            {product.category}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
            {product.title}
          </h1>
          <div className="mt-3">
            <RatingStars rating={product.rating} />
          </div>
          <p className="mt-6 text-3xl font-bold text-slate-900">
            {formatPrice(product.price)}
          </p>
          <p className="mt-6 leading-relaxed text-slate-600">
            {product.description}
          </p>
        </div>
      </div>
    </main>
  );
}
