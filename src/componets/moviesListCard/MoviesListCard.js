import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";


import css from './listCard.css'

import {StarsRating} from "../starsRating/StarsRating";
import {moviedbAction} from "../../redux";


const MoviesListCard = ({movieById}) => {

    const dispatch = useDispatch();

    return (
        <div className={'wrapCad'}>
            <div className={'blockInfoCard'}>
                <div className={"card"}>
                    <div className={'card-thumbnail'}>
                        <img src={movieById.poster} alt=""/>
                    </div>
                    <div className={"card-body"}>
                        <h2 className={"card-title"}>{movieById.title}</h2>
                        <p className={css.p}>
                            <span className={'pspan' }>Budget {movieById.budget}</span>
                            <span className={'pspan'}>{movieById.runtime}min</span>
                        </p>
                        <div className={'ganreWrap'}>
                            {movieById && movieById.genre.map(ganre =>
                                <Link to={`/ganre/${ganre.id}`} className={'pspan'} key={ganre.id} >{ganre.name}</Link>
                            )}
                        </div>

                        <div><span className={'pspan'}>{movieById.rating}</span>
                            <StarsRating stars={9} rating={movieById['rating']}/>
                        </div>
                        <p className={"card-description"}>{movieById.overview}</p>
                        <button className={"trailer"} onClick={()=> dispatch(moviedbAction.setPlayList(movieById))} > Add pley list</button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export {MoviesListCard};