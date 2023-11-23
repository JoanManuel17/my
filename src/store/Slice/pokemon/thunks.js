import { setPokemons, startLoading, stopLoading } from "./pokemonSlice.js";

export const getPokemon = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoading());

    const url = `https://pokeapi.co/api/v2/pokemon?offset=${
      page * 10
    }&limit=10`;
    const resp = await fetch(url);
    const data = await resp.json();

    dispatch(
      setPokemons({
        getPokemon: data.results,
        page: page + 1,
      })
    );
    dispatch(stopLoading());
  };
};
