export const fetchDataAction =
  () =>
  async (dispatch: any): Promise<any> => {
    try {
      const URL =
        "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";
      const data = await fetch(URL);
      const dataJSON = await data.json();
      dispatch({
        type: "FETCH_DATA",
        payload: dataJSON._embedded.episodes,
      });
    } catch (error) {
      console.log(error);
    }
  };
