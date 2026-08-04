export interface Brand {
  _id?: string;

  name: string;

  slug: string;

  description?: string;

  logo?: string;

  featured: boolean;

  active: boolean;

  createdAt?: Date;

  updatedAt?: Date;
}