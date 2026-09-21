import { ProductGridSkeleton } from "@/components/ProductGrid";
import { Skeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Skeleton className="h-10 w-80 max-w-full" />
      <Skeleton className="mt-6 h-10 max-w-md rounded-lg" />
      <Skeleton className="mt-4 h-8 w-96 max-w-full rounded-full" />
      <Skeleton className="mt-6 h-4 w-44" />
      <div className="mt-4">
        <ProductGridSkeleton />
      </div>
    </main>
  );
}
