import React from "react";
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
  setFetchWines: React.Dispatch<React.SetStateAction<Wine[]>>;
}

export interface NavigationContextInterface {
  currentPage: string;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
  overAge: boolean;
  setOverAge: React.Dispatch<React.SetStateAction<boolean>>;
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface NotificationContextInterface {
  notificationOn: boolean;
  setNotificationOn: React.Dispatch<React.SetStateAction<boolean>>;
  hideNotification: boolean;
  setHideNotification: React.Dispatch<React.SetStateAction<boolean>>;
  notificationText: string;
  setNotificationText: React.Dispatch<React.SetStateAction<string>>;
  notificationColor: string;
  setNotificationColor: React.Dispatch<React.SetStateAction<string>>;
}