import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main/Main";
import Login from "../pages/Login/Login";
import Header from "../pages/Shared/Header/Header";
import Register from "../pages/Register/Register";
import Blogs from "../pages/Blogs/Blogs";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Header />
            },
            {
                path: 'blog',
                element: <Blogs />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
])

export default router;