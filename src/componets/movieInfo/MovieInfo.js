import css from './MovieInfoModule.css'

const MovieInfo = ({movieById:{production_companies}}) => {

    let img;

    if (production_companies && production_companies !== 'https://image.tmdb.org/t/p/original/null'){

        img = production_companies

    }else{
        img = 'https://previews.123rf.com/images/vadymvdrobot/vadymvdrobot1709/vadymvdrobot170900087/85164198-panda-holding-board-with-message-sorry-page-is-not-found-error-concept-vector-illustration.jpg'
    }

    return (
        <div>


            <img className={'img'} src={img} alt=""/>

        </div>
    );
};

export {MovieInfo};