import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviedbServices} from "../../services";
import {urls} from "../../constans";

const initialState ={
    myPleyList:[],
    colectionId:null,
    errors:null,
    page_:1,
    total_pages:2,
    moviesList:[],
    moviedbImg:null,
    movieById:[],
    collectionMovie:[]
};
//===================================================getDiscoverMovie=================================================
const getDiscoverMovie = createAsyncThunk(
    'moviedbSlice/getDiscoverMovie',
    async ({with_genres,page},{rejectWithValue}) =>{
        try {
            const {data:{results,total_pages,page:page_}} = await moviedbServices.getAllDiscoverMovie(with_genres,page)
            return {results,total_pages,page_}
        }catch (e) {

            return rejectWithValue(e.response.date)

        }
    });

//===================================================setMoviedbImg======================================================
const setMoviedbImg = createAsyncThunk(
    'moviedbSlice/setMoviedbImg',
    async (_,{rejectWithValue}) =>{
        try {
            const {data:{results}} = await moviedbServices.getMoviedbImg()
            return results
        }catch (e) {

            return rejectWithValue(e.response.date)

        }
    });
//====================================================getMovieById======================================================
const getMovieById = createAsyncThunk(
    'moviedbSlice/getMovieById',
    async ({id},{rejectWithValue})=>{
        try {
            const {data} = await moviedbServices.findDiscoverMovie(id)
            const movie = []
            movie.push(data)
            return movie
        }catch (e) {

            return rejectWithValue(e.response.date)
        }
    }

);

//==================================================getMovieColection===================================================

const getMovieColection = createAsyncThunk(
    'moviedbSlice/getCollectionMovie',
    async ({id},{rejectWithValue})=>{
        try {
            const {data:{parts}} = await moviedbServices.getbeLongsVcollection(id)
            return parts

        }catch (e) {
            return rejectWithValue(e.data)
        }

    }
);

const sliceMoviedb = createSlice({
    name:'moviedb',
    initialState,
    reducers:{

        setPlayList:(state, action)=>{

            const index = state.myPleyList.findIndex( value => value.id === action.payload.id )
            if (index === -1 && state.myPleyList.length <= 19){
                state.myPleyList.push(action.payload)
            }


        },
        deleteMovi:(state, action)=>{
            const index = state.myPleyList.findIndex(value => value.id === action.payload.id)
            state.myPleyList.splice(index,1)

        }
    },
    extraReducers:(builder)=>
        builder

            .addCase(getDiscoverMovie.fulfilled,(state, action)=>{
                state.movieById = []
                state.errors = null
                state.page_ = action.payload.page_
                state.total_pages = action.payload.total_pages

                state.moviesList =  action.payload.results.map((m) =>({
                    id: m['id'],
                    backPoster: urls.posterUrl + m['backdrop_path'],
                    popularity: m['popularith'],
                    title: m['title'],
                    poster: urls.posterUrl + m['poster_path'],
                    overview: m['overview'],
                    rating: m['vote_average'],
                    genre:m["genre_ids"]
                }))
            })

            .addCase(setMoviedbImg.fulfilled,(state, action)=>{
                state.errors = null
                state.moviedbImg =  action.payload.map((m) =>({
                    image: urls.posterUrl + m['backdrop_path'],
                    caption: m['title']

                }))
            })

            .addCase(getMovieById.fulfilled,(state, action)=>{
                state.errors = null
                state.collectionMovie = []
                state.colectionId = action.payload[0]['belongs_to_collection'] ? action.payload[0]['belongs_to_collection']['id'] : false


                state.movieById = action.payload.map((m) =>({
                    id: m['id'],
                    production_companies:m['production_companies'].length ? urls.posterUrl + m['production_companies'][0]['logo_path'] : false,
                    collection_id:m['belongs_to_collection'] ? m['belongs_to_collection'] : false ,
                    popularity: m['popularity'],
                    title: m['title'],
                    poster: urls.posterUrl + m['poster_path'],
                    backPoster: urls.posterUrl + m['backdrop_path'],
                    overview: m['overview'],
                    rating: m['vote_average'],
                    genre:m["genres"],
                    runtime:m['runtime'],
                    budget:m['budget']
                }))

            })

            .addCase(getMovieColection.fulfilled,(state, action)=>{
                state.errors = null
                state.collectionMovie = action.payload.map((m)=>({
                    id: m['id'],
                    popularity: m['popularity'],
                    title: m['title'],
                    poster: urls.posterUrl + m['poster_path'],
                    backPoster: urls.posterUrl + m['backdrop_path'],
                    overview: m['overview'],
                    rating: m['vote_average'],
                    release_date: m['release_date']
                }))
            })

            .addDefaultCase((state, action)=>{

                const [type] = action.type.split('/').splice(-1);

                if (type === 'rejected') {
                    state.errors = action.payload
                } else {
                    state.errors = null
                }
            })


});

const {reducer:moviedbReduser,actions:{setPlayList,deleteMovi}} = sliceMoviedb

const moviedbAction = {
    getDiscoverMovie,
    setMoviedbImg,
    getMovieById,
    getMovieColection,
    setPlayList,
    deleteMovi
}

export {moviedbAction,moviedbReduser}