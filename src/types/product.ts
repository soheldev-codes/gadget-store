export interface Product {
  _id: string;
  title: string;
  slug: string;
  brand: string;
  category: string;
  thumbnail: string;
  price: number;
  discountPrice?: number;
  rating: number;
  reviewCount: number;
  sold: number;
  stock: number;
  featured?: boolean;
}