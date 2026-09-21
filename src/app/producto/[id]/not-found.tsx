import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 text-center">
      <p className="text-7xl font-bold tracking-tight text-indigo-600">404</p>
      <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
        Producto no encontrado
      </h1>
      <p className="mt-2 text-slate-600">
        El producto que buscas no existe o ya no está disponible.
      </p>
      <Link
        href="/"
        className="mt-6 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
      >
        Volver al catálogo
      </Link>
    </main>
  );
}
