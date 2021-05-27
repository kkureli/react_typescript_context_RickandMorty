/**
|--------------------------------------------------
| All interfaces!
|--------------------------------------------------
*/

export interface IState {
  episodes: Array<IEpsiode>;
  favorites: Array<any>;
}

export interface IAction {
  type: string;
  payload: any;
}

export interface IEpsiode {
  airdate: string;
  airstamp: string;
  airtime: string;
  id: number;
  image: {
    medium: string;
    original: string;
  };
  name: string;
  number: number;
  runtime: number;
  season: number;
  summary: string;
  type: string;
  url: string;
}
