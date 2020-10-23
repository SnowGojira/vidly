import {authApiEnd} from "../config.json";
import http from "./httpService";

export const login = function (email,password){
    return http.post(authApiEnd,{
        email,
        password
    });
}
