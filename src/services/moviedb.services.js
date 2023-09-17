import {axiosServices} from "./axios.services";

import {urls} from "../constans";

const moviedbServices = {
    getAllDiscoverMovie:(with_genres,page = 1)=>axiosServices.get(urls.discoverMovie,{ params: {
            api_key: '5692634a75bc2e4793815def806ccd24',
            language: 'en_US',
            page,
            sort_by:'popularity.desc',
            with_genres
        }}),
    getMoviedbImg:()=>axiosServices.get(urls.getMovieTop,{ params: {
            api_key: '5692634a75bc2e4793815def806ccd24',
            language: 'en_US',
            sort_by:'popularity.desc',
        }}),
    getAllGenre:()=>axiosServices.get(urls.genre,{params:{
            api_key: "5692634a75bc2e4793815def806ccd24",
            language: 'en_US',
        }}),
    findDiscoverMovie:(id)=>axiosServices.get(`${urls.findMovie}/${id}`,{params:{
            api_key: "5692634a75bc2e4793815def806ccd24"
        }}),
    getbeLongsVcollection:(id)=>axiosServices.get(`${urls.getCollection}/${id}`,{params:{
            api_key: "5692634a75bc2e4793815def806ccd24",
            language: 'en_US',
        }})


}
export {moviedbServices}