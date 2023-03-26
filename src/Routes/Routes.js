import { createBrowserRouter } from "react-router-dom";
import AddService from "../Components/AddService/AddService";
import AllService from "../Components/AllService/AllService";
import Contact from "../Components/Contact/Contact";
import Home from "../Components/Home/Home";
import HomePage from "../Components/HomePage/HomePage";
import SignIn from "../Components/Shared/SIgnIn/SignIn";
import SignUp from "../Components/Shared/SignUp/SignUp";
import Update from "../Components/Update/Update";
import Main from "../Main/Main";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <HomePage></HomePage>
            },
            {
                path: '/jersey',
                element: <AllService></AllService>
            },
            {
                path: '/banner',
                element: <Home></Home>
            },
            {
                path: '/contactUs',
                element: <Contact></Contact>
            },
            {
                path: 'addJersey',
                element: <AddService></AddService>
            },
            {
                path: 'update/:id',
                element: <Update></Update>,
                loader: ({ params }) => fetch(`http://localhost:5000/jersey/${params.id}`)
            },
            {
                path: 'signin',
                element: <SignIn />
            },
            {
                path: 'signup',
                element: <SignUp />
            },


        ]
    },
])
