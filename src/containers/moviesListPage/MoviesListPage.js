import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {useParams, useSearchParams} from "react-router-dom";

import css from './movieListModule.css'

import {moviedbAction} from "../../redux";
import {createPages} from "../../createPages";
import {MoviesList} from "../../componets";


const MoviesListPage = () => {

    const {id} = useParams();

    const {moviesList, page_, total_pages} = useSelector(state => state.movieCard);

    const dispatch = useDispatch();

    const [queri, setQuery] = useSearchParams({page: '1'});

    const pagesCount = Math.ceil(total_pages / 10)

    const pages = []

    createPages(pages, total_pages, +queri.get('page'))

    useEffect(() => {
        dispatch(moviedbAction.getDiscoverMovie({with_genres: id, page: queri.get('page')}))
    }, [id, queri])


    function prewPage() {
        const page = +queri.get('page') - 1
        setQuery({page: `${page}`})
    }
    function nextPage() {
        const page = +queri.get('page') + 1
        setQuery({page: `${page}`})
    }
    console.log(total_pages,page_)
    return (
        <div>

            <div className={'wrapPginaationBtn'}>

                <button className={'btn'} disabled={page_ === 1} onClick={prewPage}><i className="arrow left"></i>
                </button>


                {pages.map((page, index) =>
                    <span
                        key={index}
                        className={page == page_ ? 'curunt_page' : 'page'}
                        onClick={() => setQuery({page: `${page}`})}>
                    {page}
                    </span>)}


                <button className={'btn'}
                        disabled={total_pages <= page_}
                        onClick={nextPage}><i
                    className="arrow right"></i></button>
            </div>


            <div className={'wrap_listCard'}>

                {moviesList.length && moviesList.map(moviesList => <MoviesList key={moviesList.id} moviesList={moviesList}/>)}

            </div>
        </div>
    );
};

export {MoviesListPage};