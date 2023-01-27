import axios from "axios";

const server = import.meta.env.VITE_SERVER_URI
const configure = {
     local:"http://localhost:3000/"
    //local:import.meta.env.VITE_SERVER_URI

};

const http = axios.create({
    baseURL: configure.local,
    headers: {
        'Access-Control-Allow-Origin': '*',
        //'Access-Control-Allow-Methods': '*',
        //'Access-Control-Allow-Headers': '*',
        'Content-Type': 'application/json;charset=utf-8',
    }
});

// http.interceptors.request.use(
//     function (config) {
//         let user = sessionStorage.getItem('usuario');
//         config.headers.Authorization = (user != null && user.token != null) ? "Bearer " + user.token : '';
//         return config;
//     }
// );

export default http;