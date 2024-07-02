import { createBrowserRouter } from "react-router-dom";
import { ChangeEmail, ChangePass, ClearanceList, ForgotPassword, HomePage, LogIn, LogedIn, LoginInputs, MainLayout, ProtectedRoute, Setting, authenticate } from "../hooks/links";

export const router = createBrowserRouter([
    {
        path:'/',
        element:(
            <ProtectedRoute authenticate={authenticate}>
                <MainLayout/>
            </ProtectedRoute>
        ),
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
        element:(
            <LogedIn authenticate={authenticate}>
                <LogIn/>
            </LogedIn>
        ),
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