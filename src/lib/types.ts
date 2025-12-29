export type Product = {
  id: string;
  slug: string;
  name: string;
  description: string;
  detailedDescription: {
    flavor: string;
    ingredients: string;
    serving: string;
    storage: string;
  };
  price: number;
  sizes?: {
    name: string;
    price: number;
  }[];
  imageId: string;
  collection: string;
};

export type Collection = {
  id: string;
  slug: string;
  title: string;
  description: string;
  imageId: string;
};

export type Article = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  imageId: string;
  content: string;
};

export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

export type NavLink = {
  href: string;
  label: string;
};

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  imageId: string;
  slug: string;
  size?: string;
};
