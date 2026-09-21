# Catálogo de productos

Catálogo construido con Next.js (App Router), TypeScript y Tailwind CSS que consume la [Fake Store API](https://fakestoreapi.com).

## Instalación

> [!NOTE]
> Requiere Node.js 20.9 o superior.

```bash
npm install
```

## Desarrollo

```bash
npm run dev
```

La aplicación queda en `http://localhost:3000`.

## Decisiones técnicas

- **Server Components para la carga de datos.** Las páginas piden los datos en el servidor, así el HTML llega con los productos y no hace falta `useEffect`. Productos y categorías se piden en paralelo.
- **Capa de datos en `lib/api.ts`.** Un solo punto centraliza la URL base, la caché (revalidación cada hora) y los errores. Detecta el cuerpo vacío que devuelve la API para ids inexistentes y responde con un 404.
- **Filtros en la URL (`?q=` y `?categoria=`).** El filtrado se hace en el servidor con una función pura. El enlace se puede compartir y el botón atrás funciona. Solo el buscador y el filtro son Client Components.
- **Estructura por capas:** `app` (rutas), `components` (interfaz), `lib` (datos y utilidades) y `types` (interfaces del dominio).
- **Sin librerías adicionales.** Para dos pantallas bastan Next.js, React y Tailwind.
