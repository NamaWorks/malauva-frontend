import { WinesAction, WinesState } from "../utils/types/types";

export const winesReducer = (state: WinesState, action: WinesAction): WinesState => {
  switch (action.type) {
    case 'SET_FETCH_WINES':
      return action.payload;
    default:
      return state;
  }
};