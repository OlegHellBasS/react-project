import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {moviedbAction} from "./movieCard.slice";
import {moviedbServices} from "../../services";

const initialState = {
    ganre:[],
    errors:null
};


const getGenre = createAsyncThunk(
    'moviedbSlice/getGenre',
    async (_,{rejectWithValue})=>{
        try {
            const {data:{genres}} = await moviedbServices.getAllGenre()
            return genres
        }catch (e) {
            return rejectWithValue(e.response.date)

        }
    }
);

const sliceGanre = createSlice({
    name:'sliceGanre',
    initialState,
    reducers:{},
    extraReducers:(builder)=>
        builder
            .addCase(getGenre.fulfilled,(state, action)=>{
                state.errors = null
                state.ganre = action.payload
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


const {reducer:ganreReduser} = sliceGanre

const ganreAction ={
    getGenre
}
export {ganreAction,ganreReduser}