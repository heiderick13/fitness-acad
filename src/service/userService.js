import { User } from '@/model/User'; //@ referencia a pasta principal do sistema (SRC)
import http from './config';
export default {

    add: function (user = new User) {
        console.log(user)
        return http.post("/user/add", user)
    },
    list: function () {
    return http.get("/usuario/list")
    },
    login: (user) => {
    const dadosLogin = { email:user.email, senha:user.senha}    
    return http.post("/user/login", dadosLogin)
    },
    get: function (id) {
        return http.get("/usuario/" + id);
    }
   
    


}