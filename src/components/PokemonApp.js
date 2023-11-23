import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {getPokemon} from "../store/pokemonSlice";

export const PokemonApp = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPokemon());
    }   , []);

    return (  
        <div>
            <h1>Pokemon</h1>
        </div>
    );
}