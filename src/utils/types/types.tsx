export type Wine = {
  _id?: string;
  idNumber?: string;
  name?: string;
  description?: string;
  picture?: string;
  taste?: string;
  idealTemperature:number;
  origin?: string;
  scores?: string[];
  price: number;
  __v?: number;
  createdAt?: string;
  updatedAt?: string;
}

export type Icon = {
  url: string;
  name: string;
}

export type objectFromAccentAdding = {
  letterToAccent: {
    position: number;
    value: string;
  },
  restOfTheText: {
    position: number;
    value: string;
  }
}

export type position = {
  x: number,
  y: number,
}

export type cartItem = {
  itemData: Wine,
  numberOfItems: number
}

export type cartReadyItem = {
  name: string;
  idNumber: string;
  numberOfItems: number;
  price: number;
  picture: string
}