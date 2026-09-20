import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/format";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/producto/${product.id}`}
      className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:border-indigo-300 hover:shadow-md"
    >
      <div className="relative h-48 bg-white">
        <Image
          src={product.image}
          alt={product.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-4"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 border-t border-slate-100 p-4">
        <p className="text-xs uppercase tracking-wide text-slate-500">
          {product.category}
        </p>
        <h3 className="line-clamp-2 text-sm font-medium text-slate-900">
          {product.title}
        </h3>
        <p className="text-xs text-slate-500">
          <span className="text-amber-500">★</span> {product.rating.rate} (
          {product.rating.count})
        </p>
        <p className="mt-auto text-lg font-semibold text-slate-900">
          {formatPrice(product.price)}
        </p>
      </div>
    </Link>
  );
}
