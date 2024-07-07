import axios from "axios"
import Cookies from 'js-cookie';

const fetchUserData = async()=>{
    try {
        const env = import.meta.env;
        const serverURL = env.VITE_REACT_SERVER_URL;

        const userID = Cookies.get('userID');
        const token = Cookies.get('token');

        if(!userID || !token){
            throw new Error;
        }

        const {data} = await axios.get(`${serverURL}/osc/api/getSingleStudent?userID=${userID}`,{
            headers:{
                Authorization:token
            }
        })

        return data;
    } catch (error) {
        Cookies.remove('token');
        Cookies.remove('userID');

        location.reload()
    }
}
export default fetchUserData