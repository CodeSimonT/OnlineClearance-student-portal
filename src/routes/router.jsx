import { createBrowserRouter } from "react-router-dom";
import { HomePage, MainLayout } from "../hooks/links";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            }
        ]
    }
])