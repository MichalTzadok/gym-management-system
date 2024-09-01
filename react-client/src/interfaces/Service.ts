export interface Service {
  _id: string;
  name: string;
  description: string;
  price: number;
  duration: string;
  businessId: string;
}

export interface NewService {
  name: string;
  description: string;
  price: number;
  duration: string;
  businessId: string;
}