export type Sale = {
  year: number;
  sales: number;
};

export async function fetchSalesData(): Promise<Sale[]> {
  const res = await fetch("https://fakestoreapi.com/products");

  const products = await res.json();

  // Simulate year grouping
  const yearlySales: Record<number, number> = {
    2022: 0,
    2023: 0,
    2024: 0,
  };

  products.forEach((product: any, index: number) => {
    const year = 2022 + (index % 3);
    yearlySales[year] += product.price * 100; // scale up
  });

  return Object.entries(yearlySales).map(([year, sales]) => ({
    year: Number(year),
    sales,
  }));
}
