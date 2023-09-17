import {useParams} from "react-router-dom";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import css from './CardPageModule.css'

import {moviedbAction} from "../../redux";
import {MovieInfo, MoviesListCard, PostersPreviem} from "../../componets";

const MoviesListCardPage = () => {
    const {id} = useParams();

    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(moviedbAction.getMovieById({id}))

    }, [id])

    const {movieById} = useSelector(state => state.movieCard);


    return (
        <div className={'CardPage_wrap'}>

            {movieById.length  && movieById.map(movieById => <MovieInfo key={movieById.id}
                                                                        movieById={movieById}/>)}

            {movieById.length  && movieById.map(movieById => <MoviesListCard movieById={movieById}
                                                                             key={movieById.id}/>)}

            {movieById.length  && movieById.map(movieById => <PostersPreviem movieById={movieById}
                                                                             key={movieById.id}/>)}


        </div>
    );
};

export {MoviesListCardPage};