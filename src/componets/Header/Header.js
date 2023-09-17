import { Link } from "react-router-dom";

import { GenreBadge } from "../genreBadge/GenreBadge";
import { MovieSlayder } from "../movieSlayder/MovieSlayder";
import { SwitchToggle } from "../switchToggle/SwitchToggle";

import ccs from './headerwrap.css'

const Header = () => {
    return (

        <div>
            <div className={'zzz'}>

                <Link to={'/playList'}>
                    <button className={'trailer'}>Play List</button>
                </Link>

                <SwitchToggle/>

            </div>

            <div className={'header_wrap'}>
                <MovieSlayder/>
                <GenreBadge/>

            </div>
        </div>

    );
};

export {Header};