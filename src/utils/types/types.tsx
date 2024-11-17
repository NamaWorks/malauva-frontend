export type Wine = {
  _id: string;
  idNumber: string;
  name: string;
  brand: string;
  picture: string;
  taste: string;
  idealTemperature:number;
  origin: string;
  scores: string[];
  price: number;
  __v: number;
  createdAt: string;
  updatedAt: string;
}

export type Icon = {
  url: string;
  name: string;
}