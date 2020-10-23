import {usersApiEnd} from "../config.json";
import http from "./httpService";

export const register = function (user){
    return http.post(usersApiEnd,{
        email:user.username,
        password:user.password,
        name:user.name
    });
}