export type Wine = {
  _id?: string;
  idNumber?: string;
  name?: string;
  description?: string;
  picture?: string;
  taste?: string;
  idealTemperature: number;
  origin?: string;
  scores?: string[];
  price: number;
  __v?: number;
  createdAt?: string;
  updatedAt?: string;
};

export type Icon = {
  url: string;
  name: string;
};

export type objectFromAccentAdding = {
  letterToAccent: {
    position: number;
    value: string;
  };
  restOfTheText: {
    position: number;
    value: string;
  };
};

export type position = {
  x: number;
  y: number;
};

export type cartItem = {
  itemData: Wine;
  numberOfItems: number;
};

export type cartReadyItem = {
  name: string;
  idNumber: string;
  numberOfItems: number;
  price: number;
  picture: string;
};

export type NotificationState = {
  notificationOn: boolean;
  hideNotification: boolean;
  notificationText: string;
  notificationColor: string;
};

export type NotificationAction =
  | { type: "SET_NOTIFICATION_ON"; payload: boolean }
  | { type: "SET_HIDE_NOTIFICATION"; payload: boolean }
  | { type: "SET_NOTIFICATION_TEXT"; payload: string }
  | { type: "SET_NOTIFICATION_COLOR"; payload: string };

export type NavigationState = {
  currentPage: string;
  overAge: boolean;
  loggedIn: boolean;
};

export type NavigationAction =
  | { type: "SET_CURRENT_PAGE"; payload: string }
  | { type: "SET_OVER_AGE"; payload: boolean }
  | { type: "SET_LOGGED_IN"; payload: boolean };

export type WinesState = Wine[];
export type WinesAction = { type: "SET_FETCH_WINES"; payload: Wine[] };
