import React, { FC, useReducer } from "react";
import { IAction, IState } from "./interfaces";

const initialState: IState = {
  episodes: [],
  favorites: [],
};

export const Store = React.createContext<IState | any>(initialState);

const reducer = (state: IState, action: IAction): IState => {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    case "ADD_FAV":
      return { ...state, favorites: [...state.favorites, action.payload] };
    case "REMOVE_FAV":
      const newFavs = state.favorites.filter((e) => {
        return e !== action.payload;
      });
      return { ...state, favorites: [...newFavs] };
    default:
      return state;
  }
};

export const StoreProvider: FC = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
};
