import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {moviedbAction, moviedbReduser} from "./slices/movieCard.slice";
import {ganreReduser} from "./slices/movieGanre.slice";


const rootReducers = combineReducers({
    movieCard:moviedbReduser,
    movieGanre:ganreReduser
});

const setUpstore = () => configureStore({
    reducer:rootReducers
});

export {setUpstore}