export interface Product {
  _id?: string;

  // Basic Information
  title: string;
  slug: string;
  shortDescription: string;
  description: string;

  // Relations
  brand: string;
  category: string;

  // Images
  thumbnail: string;
  gallery: string[];

  // Pricing
  price: number;
  discountPrice?: number;
  costPrice: number;

  // Inventory
  stock: number;
  lowStockAlert: number;
  sku: string;
  warranty: number;

  // Status
  featured: boolean;
  trending: boolean;
  active: boolean;
  draft: boolean;

  // Statistics
  sold: number;
  rating: number;
  reviewCount: number;

  // Timestamps
  createdAt?: Date;
  updatedAt?: Date;
}