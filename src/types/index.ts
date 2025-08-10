export interface Product {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
  category: 'stationery' | 'sports' | 'gifts';
  buyLinks: {
    amazon?: string;
    flipkart?: string;
    other?: string;
  };
  featured?: boolean;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
  mapUrl: string;
}

export interface AdminUser {
  username: string;
  password: string;
}