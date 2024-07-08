import axios from 'axios';
import MainLayout from '../pages/Layout/MainLayout'
import HomePage from '../pages/Home/HomePage'
import SideNav from '../components/nav/SideNav'
import Navbar from '../components/nav/Navbar'
import Profile from '../components/cards/Profile'
import ActiveClearanceTable from '../components/tables/ActiveClearanceTable'
import ClearanceList from '../pages/ClearanceList/ClearanceList'
import ClearanceListTable from '../components/tables/ClearanceListTable'
import Setting from '../pages/Settings/Setting'
import ChangeEmail from '../pages/Settings/forms/ChangeEmail'
import ChangePass from '../pages/Settings/forms/ChangePass'
import LogIn from '../pages/forms/LogIn'
import LoginInputs from '../pages/forms/LoginInputs'
import ForgotPassword from '../pages/forms/ForgotPassword'
import { authenticate } from './auth'
import ProtectedRoute from './ProtectedRoutes'
import LogedIn from './LogedIn'
import ErrorToast from '../components/toast/ErrorToast'
import SuccessToast from '../components/toast/SuccessToast'
import cookie from './cookie'
import Spinner from '../components/Spinner'
import fetchUserData from './fetchUserData'
import DeficiencyModal from '../components/modals/DeficiencyModal';
import deficiencyModalStore from './Store/deficiencyModalStore';


export {
    axios,
    MainLayout,
    HomePage,
    SideNav,
    Navbar,
    Profile,
    ActiveClearanceTable,
    ClearanceList,
    ClearanceListTable,
    Setting,
    ChangeEmail,
    ChangePass,
    LogIn, 
    LoginInputs,
    ForgotPassword,
    authenticate, 
    ProtectedRoute, 
    LogedIn,
    ErrorToast,
    SuccessToast,
    cookie,
    Spinner,
    fetchUserData,
    DeficiencyModal,
    deficiencyModalStore,
}