import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";

import css from './moviesList.module.css'

import {StarsRating} from "../starsRating/StarsRating";
import {moviedbAction} from "../../redux";

const MyPleyList = ({myPleyList}) => {

    const dispatch = useDispatch();

    return (
        <div className={'xxx'}>
            <Link to={`/movieInfo/${myPleyList.id}`}>
                <div className={css.bx}>
                    <img src={myPleyList.poster} alt=""/>
                    <div className={css.content}>
                        <h3>{myPleyList.title}</h3>
                        <StarsRating rating={myPleyList['rating']} stars={6}/>
                    </div>
                </div>
            </Link>
            <button className={'trailer'} onClick={()=>dispatch(moviedbAction.deleteMovi(myPleyList))}>delete</button>
        </div>
    );
};

export {MyPleyList};