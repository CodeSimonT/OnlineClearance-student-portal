import { createBrowserRouter } from "react-router-dom";
import { ChangeEmail, ChangePass, ClearanceList, HomePage, MainLayout, Setting } from "../hooks/links";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<HomePage/>
            },
            {
                path:'clearance-list',
                element:<ClearanceList/>
            },
            {
                path:'settings',
                element:<Setting/>,
                children:[
                    {
                        path:'/settings',
                        element:<ChangeEmail/>
                    },
                    {
                        path:'/settings/change-email',
                        element:<ChangePass/>
                    },
                ]
            }
        ]
    }
])