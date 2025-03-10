import { NotificationAction, NotificationState } from "../utils/types/types";

export const notificationReducer = (state: NotificationState, action: NotificationAction): NotificationState => {
  switch (action.type) {
    case 'SET_NOTIFICATION_ON':
      return { ...state, notificationOn: action.payload };
    case 'SET_HIDE_NOTIFICATION':
      return { ...state, hideNotification: action.payload };
    case 'SET_NOTIFICATION_TEXT':
      return { ...state, notificationText: action.payload };
    case 'SET_NOTIFICATION_COLOR':
      return { ...state, notificationColor: action.payload };
    default:
      return state;
  }
};
