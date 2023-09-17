import {Link} from "react-router-dom";

import css from "./moviesList.module.css";

import {StarsRating} from "../starsRating/StarsRating";

const MoviesList = ({moviesList}) => {
    return (
        <div className={'xxx'}>
            <Link to={`/movieInfo/${moviesList.id}`}>
                <div className={css.bx}>
                    <img src={moviesList.poster !== 'https://image.tmdb.org/t/p/original/null' && moviesList.poster } alt=""/>
                    <div className={css.content}>
                        <h3>{moviesList.title}</h3>
                        <StarsRating rating={moviesList['rating']} stars={6}/>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export {MoviesList};