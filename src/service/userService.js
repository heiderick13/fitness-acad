import { User } from '@/model/User'; //@ referencia a pasta principal do sistema (SRC)
import http from './config';
export default {

    add: function (user = new User) {
        console.log(user)
        return http.post("/user/add", user)
    }
    


}