import React, { FC, useContext, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Store } from "./Store";
import { fetchDataAction } from "./action";
import { IAction, IEpsiode } from "./interfaces";

const App: FC = () => {
  const { state, dispatch } = useContext(Store);

  useEffect(() => {
    fetchDataAction()(dispatch);
  }, []);

  const toggleFavAction = (episode: IEpsiode): IAction => {
    const episodeInFav = state.favorites.includes(episode);
    if (episodeInFav) {
      return dispatch({
        type: "REMOVE_FAV",
        payload: episode,
      });
    } else {
      return dispatch({
        type: "ADD_FAV",
        payload: episode,
      });
    }
  };

  console.log(state.favorites);

  return (
    <>
      <h1>Rick and Morty</h1>
      <p>Pick your favorite episode</p>
      <section>
        {state.episodes &&
          state.episodes.map((episode: IEpsiode) => {
            return (
              <section key={episode.id}>
                <img src={episode.image?.medium} alt="" />
                <div>{episode.name}</div>
                <section>
                  <div>
                    Seasons: {episode.season} Number: {episode.number}
                  </div>
                  {state.favorites.includes(episode) ? (
                    <button onClick={() => toggleFavAction(episode)}>
                      Remove Fav
                    </button>
                  ) : (
                    <button onClick={() => toggleFavAction(episode)}>
                      Fav
                    </button>
                  )}
                </section>
              </section>
            );
          })}
      </section>
    </>
  );
};

export default App;
