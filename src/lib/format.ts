const priceFormatter = new Intl.NumberFormat("es-SV", {
  style: "currency",
  currency: "USD",
});

export function formatPrice(price: number): string {
  return priceFormatter.format(price);
}
