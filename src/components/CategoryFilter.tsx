"use client";

import { Category } from "@/types/category";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface CategoryFilterProps {
  categories: Category[];
}

export function CategoryFilter({ categories }: CategoryFilterProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get("categoria");

  function selectCategory(category: Category | null) {
    const params = new URLSearchParams(searchParams.toString());
    if (category) {
      params.set("categoria", category);
    } else {
      params.delete("categoria");
    }
    // Push para poder deshacerse la acción
    router.push(`${pathname}?${params.toString()}`);
  }

  return (
    <ul className="flex flex-wrap gap-2">
      <li>
        <button
          type="button"
          onClick={() => selectCategory(null)}
          className={
            active === null
              ? "rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white"
              : "rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-200"
          }
        >
          Todas
        </button>
      </li>
      {categories.map((category) => (
        <li key={category}>
          <button
            type="button"
            onClick={() => selectCategory(category)}
            className={
              active === category
                ? "rounded-full bg-indigo-600 px-4 py-1.5 text-sm font-medium text-white"
                : "rounded-full bg-slate-100 px-4 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-200"
            }
          >
            {category}
          </button>
        </li>
      ))}
    </ul>
  );
}
