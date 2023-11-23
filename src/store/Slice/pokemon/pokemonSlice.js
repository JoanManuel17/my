import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: {
    page: 0,
    pokemons: [],
    loading: false,
  },
  reducers: {
    startLoading: (state, action) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemonspage = action.payload.pokemons;
    },
    stopLoading: (state, action) => {
      state.isLoading = false;
    },
  },
});

export const { startLoading, setPokemons } = pokemonSlice.actions;
