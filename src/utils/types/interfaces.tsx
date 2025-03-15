import React, { Dispatch } from "react";
import { Wine } from "./types";

export interface UseSubmitFiltersProps {
  setOriginsValue: (value: string) => void;
  setTasteValue: (value: string) => void;
  setPriceValue: (value: number | string) => void;
  setTemperatureValue: (value: number | string) => void;
  setSortValue: (value: string) => void;
}

export interface NavigationButtonProps {
  kind: string;
  id?: string;
  text?: string;
  color?: string;
  link?: string;
  fnc?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface SublinkProps {
  text: string;
  link?: string;
  fnc?: void|any;
  color?: string;
}

export interface WinesContextInterface {
  fetchWines: Wine[];
  dispatchFetchWines: Dispatch<{ type: 'SET_FETCH_WINES'; payload: Wine[] }>;
}

// export interface NavigationContextInterface {
//   currentPage: string;
//   setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
//   overAge: boolean;
//   setOverAge: React.Dispatch<React.SetStateAction<boolean>>;
//   loggedIn: boolean;
//   setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
// }

export interface NavigationContextInterface {
  navigationState: NavigationState;
  dispatchNavigation: Dispatch<
    | { type: 'SET_CURRENT_PAGE'; payload: string }
    | { type: 'SET_OVER_AGE'; payload: boolean }
    | { type: 'SET_LOGGED_IN'; payload: boolean }
  >;
}

export interface NotificationContextInterface {
  notificationState: NotificationState;
  dispatchNotification: Dispatch<
    | { type: 'SET_NOTIFICATION_ON'; payload: boolean }
    | { type: 'SET_HIDE_NOTIFICATION'; payload: boolean }
    | { type: 'SET_NOTIFICATION_TEXT'; payload: string }
    | { type: 'SET_NOTIFICATION_COLOR'; payload: string }
  >;
}

export interface NavigationState {
  currentPage: string;
  overAge: boolean;
  loggedIn: boolean;
}

export interface NotificationState {
  notificationOn: boolean;
  hideNotification: boolean;
  notificationText: string;
  notificationColor: string;
}


