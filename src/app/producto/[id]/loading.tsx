import { Skeleton } from "@/components/Skeleton";

export default function Loading() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Skeleton className="h-4 w-32" />
      <div className="mt-6 grid gap-8 lg:grid-cols-2">
        <Skeleton className="h-96 rounded-xl" />
        <div>
          <Skeleton className="h-3 w-24" />
          <Skeleton className="mt-2 h-9 w-3/4" />
          <Skeleton className="mt-3 h-5 w-48" />
          <Skeleton className="mt-6 h-9 w-32" />
          <Skeleton className="mt-6 h-24 w-full" />
        </div>
      </div>
    </main>
  );
}
