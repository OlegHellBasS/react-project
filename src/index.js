import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';

import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";

import {setUpstore} from "./redux";
import {ThemaContext} from "./context";
import {routers} from "./routers";


const root = ReactDOM.createRoot(document.getElementById('root'));

let store = setUpstore();

function Main() {
    const [thema,setThema] = useState('dark');
    return(
        <Provider store={store}>
                <ThemaContext.Provider value={{thema,setThema}}>
                    <RouterProvider router={routers}/>
                </ThemaContext.Provider>
        </Provider>
    )
}

root.render(
    <Main/>
);

