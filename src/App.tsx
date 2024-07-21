import './App.css';

import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import Home from "./pages/Home";
import Layout from "./pages/Layout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: 'about',
                lazy: () => import("./pages/About")
            }
        ]
    }
]);


export default function App() {
    return <RouterProvider router={router} fallbackElement={<p>Loading...</p>}/>;
};
