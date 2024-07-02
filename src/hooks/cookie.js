import { create } from 'zustand';
import Cookies from 'js-cookie';

const cookie = create((set)=>({
    userID:null,
    token:null,

    setCookie: (userID, token)=>{
        // Save the user ID and token as cookies with an expiration time
        Cookies.set('userID', userID, {expires: 7});
        Cookies.set('token', token, {expires: 7})
    },

    getCookie: ()=>{
        set({
            userID:Cookies.get('userID'),
            token:Cookies.get('token')
        })
    },

    clearCookie:()=>{
        Cookies.remove('token');
        Cookies.remove('userID');

        set({
            userID:null,
            token:null
        })
    }
}));

export default cookie;