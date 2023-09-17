import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {Carousel} from 'react-carousel-minimal';

import css from './MovieSlayderModule.css'

import {moviedbAction} from "../../redux";


const MovieSlayder = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(moviedbAction.setMoviedbImg())
    }, [])

    const {moviedbImg} = useSelector(state => state.movieCard);

    const data = moviedbImg

    const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
    }
    const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',

    }
    const slideImageFit = {}

    return (
        <div className={'slideWrap'}>

            {moviedbImg && <div>
                <div style={{textAlign: "center", width: '1100px'}}>

                    <div style={{padding: "0 20px"}}>
                        <Carousel
                            data={data}
                            time={4000}
                            width="100%"
                            maxheight="100%"
                            captionStyle={captionStyle}
                            radius="10px"
                            slideNumber={false}
                            slideNumberStyle={slideNumberStyle}
                            captionPosition="bottom"
                            automatic={true}
                            dots={true}
                            pauseIconColor="white"
                            pauseIconSize="40px"
                            slideBackgroundColor="darkgrey"
                            slideImageFit={slideImageFit}
                            thumbnails={true}
                            thumbnailWidth="100px"
                            style={{
                                textAlign: "center",
                                maxWidth: "100%",
                                maxHeight: "100%",
                                margin: "40px auto",
                            }}
                        />
                    </div>
                </div>
            </div>}

        </div>


    );
};

export {MovieSlayder};