import {createBrowserRouter, Navigate} from "react-router-dom";
import {MoviePage, MoviesListCardPage, MoviesListPage, NotFoundPage, PageMyPleyList} from "./containers";

const routers = createBrowserRouter([
    {
        path:'/',
        element:<MoviePage/>,
        children:[
            {
                index:true,
                element:<Navigate to={'movieList'}/>
            },
            {
                path:'movieList',
                element:<MoviesListPage/>
            },
            {
                path:'ganre/:id',
                element:<MoviesListPage/>
            },
            {
                path:'movieInfo/:id',
                element:<MoviesListCardPage/>
            },
            {
                path:'playList',
                element:<PageMyPleyList/>
            },
            {
                path:'*',
                element:<NotFoundPage/>
            },
        ]
    }
])

export {routers}