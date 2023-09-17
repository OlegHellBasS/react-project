import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import css from './ganreBadge.module.css'

import {ganreAction} from "../../redux";

const GenreBadge = () => {

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(ganreAction.getGenre())
    },[])

    const {ganre} = useSelector(state => state.movieGanre);

    return (
        <div className={css.wrap_Btn_blc}>

            <div className={css.wrapGanreBtn}>

                {ganre.length && ganre.map((m) => <Link to={`ganre/${m.id}`} state={m.id} key={m.id}><button className={css.btn}>{m.name}</button></Link> )}


            </div>

        </div>

    );
};

export {GenreBadge};