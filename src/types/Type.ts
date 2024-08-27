export interface ProductsType {
  id: number;
  title: string;
  description: string;
  image: string;
  price: number;
  discount?: number; // Optional
}
export interface Rating {
  rate: number;
  count: number;
}
