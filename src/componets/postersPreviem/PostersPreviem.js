import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import css from './postesModule.css'

import {moviedbAction} from "../../redux";
import {PosterPreview} from "../posterPreview/PosterPreview";

const PostersPreviem = ({movieById:{collection_id}}) => {

    const dispatch = useDispatch();

    useEffect(()=>{

        if (collection_id){

            dispatch(moviedbAction.getMovieColection({id:collection_id.id}))
        }

    },[])

    const {collectionMovie} = useSelector(state => state.movieCard);

    return (

        <div className={'asd'}>
            {collectionMovie.map((collectionMovie,index) => <PosterPreview key={index} collectionMovie={collectionMovie}/>)}
        </div>

    );
};

export {PostersPreviem};