import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main/Main";
import Login from "../pages/Login/Login";
import Header from "../pages/Shared/Header/Header";
import Register from "../pages/Register/Register";

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