import { createBrowserRouter } from "react-router-dom";
import { ChangeEmail, ChangePass, ClearanceList, ForgotPassword, HomePage, LogIn, LoginInputs, MainLayout, Setting } from "../hooks/links";

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
    },
    {
        path:'/form',
        element:<LogIn/>,
        children:[
            {
                path:'login',
                element:<LoginInputs/>
            },
            {
                path:'forgotpassword',
                element:<ForgotPassword/>
            }
        ]
    }
])