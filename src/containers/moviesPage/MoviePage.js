import {Outlet} from "react-router-dom";

import css from './moviesPageModule.css'

import {Footer, Header} from "../../componets";
import {useContext} from "react";
import {ThemaContext} from "../../context";


const MoviePage = () => {

    const {thema} = useContext(ThemaContext);

    return (
        <div className={`${'wrap'} ${thema}`}>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export {MoviePage};