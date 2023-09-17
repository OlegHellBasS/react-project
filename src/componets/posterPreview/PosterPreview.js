import {Link} from "react-router-dom";

import css from './postPreviem.css'

import {StarsRating} from "../starsRating/StarsRating";

const PosterPreview = ({collectionMovie}) => {
    return (
        <div>
            <Link to={`/movieInfo/${collectionMovie.id}`}>
                <div className={'bx'}>
                    {collectionMovie.poster !=='https://image.tmdb.org/t/p/original/null' && <img src={collectionMovie.poster} alt=""/>}
                    <div className={'content'}>
                        <h3>{collectionMovie.title}</h3>
                        <div>
                            <StarsRating stars={6} rating={collectionMovie['rating']}/>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export {PosterPreview};