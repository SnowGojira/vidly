import axios from "axios";

axios.interceptors.response.use(null,err=>{
  const clientError = err.response && err.response.status >=400 && err.response.status <500;
  if(!clientError){
    console.log("An unexcepted error happened!:"+err);
  }
  return Promise.reject(err);
})

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
