import React from 'react';
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route } from "react-router-dom";
import {Main} from './components';
import {SinglePuppy} from './components';


const router = createBrowserRouter (
    createRoutesFromElements(
        <Route>
            <Route path="/">
            <Route path="" element={<Main />}/>
            <Route path=":id" element={<SinglePuppy />}/>
            </Route>
        </Route>
    )
)

const container = document.getElementById('app')
const root = ReactDOM.createRoot(container)

root.render(
<React.StrictMode>
    <RouterProvider router={router}/>
</React.StrictMode>
)