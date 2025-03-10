import { NavigationAction, NavigationState } from "../utils/types/types";

export const navigationReducer = (state: NavigationState, action: NavigationAction): NavigationState => {
  switch (action.type) {
    case 'SET_CURRENT_PAGE':
      return { ...state, currentPage: action.payload };
    case 'SET_OVER_AGE':
      return { ...state, overAge: action.payload };
    case 'SET_LOGGED_IN':
      return { ...state, loggedIn: action.payload };
    default:
      return state;
  }
};
