import {authApiEnd} from "../config.json";
import http from "./httpService";
import jwtDecoder from "jwt-decode";

const tokenKey = "token";

export const login = async function (email,password){
    const {data:token} = await http.post(authApiEnd,{
        email,
        password
    });

    localStorage.setItem(tokenKey,token);
}

export function loginWithToken(token){
   localStorage.setItem(tokenKey,token);
}

export function getCurrentUser(){
    try {
        //如果为空，jwtDecoder会出bug
        const token = localStorage.getItem(tokenKey);
        return jwtDecoder(token);
      } catch (error) {
        //do nothing
        return null;
      }
}

export function logout(){
    localStorage.removeItem(tokenKey);
}

export function getToken(){
    return localStorage.getItem(tokenKey);
}
export default {
    login,
    loginWithToken,
    logout,
    getCurrentUser,
    getToken
}