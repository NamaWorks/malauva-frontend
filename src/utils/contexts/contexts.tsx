import { createContext } from "react";
import { WinesContextInterface, NavigationContextInterface, NotificationContextInterface } from "../types/interfaces";

export const WinesContext = createContext<WinesContextInterface | undefined>(undefined);
export const NavigationContext = createContext<NavigationContextInterface | undefined>(undefined);
export const NotificationContext = createContext<NotificationContextInterface | undefined>(undefined);