import axios from "axios";

const configure = {
    //local: location.origin.replace(location.port, ""),
    //local: "http://localhost:8000/projetos/projetoIntegrador/fitness-acad/api/index.php"
    local: "http://rafaelcabral26.gratisphphost.info/api/index.php"
};

const http = axios.create({
    baseURL: configure.local,
    headers: {
        'Access-Control-Allow-Origin': '*',
        //'Access-Control-Allow-Methods': '*',
        'Access-Control-Allow-Headers': '*',
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