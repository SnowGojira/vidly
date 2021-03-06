import axios from "axios";
import {toast} from "react-toastify";
import logger from "./logService";

const tokenHeader = "x-auth-token";

axios.interceptors.response.use(null,err=>{
  const clientError = err.response && err.response.status >=400 && err.response.status <500;
  if(!clientError){
    toast.error("An unexcepted error happened!");
  }
  
  logger.log(err);
  return Promise.reject(err);
})

export function setToken(token){
  axios.defaults.headers.common[tokenHeader] = token;
}

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setToken
};
