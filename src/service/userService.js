import { User } from '@/model/User'; //@ referencia a pasta principal do sistema (SRC)

export default {

    add: function (user = new User) {
        try {
            const xhttp = new XMLHttpRequest();
            xhttp.onload = function () {
                alert("Cadastrado!", this.responseText);
                console.log(user);
                console.log(this.responseText);
            }
            xhttp.open("POST", "http://localhost:8000/usuario/add", false);
            //Header da mensagem: todas as origins
            xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
            //Header da mensagem: conteúdo é um json com caracteres utf-8
            xhttp.setRequestHeader("Content-type", "application/json;charset=utf-8");
            xhttp.send(JSON.stringify(user));
        } catch (error) {
            console.error(error);
            alert("Erro: " + error);
        }
    },

    list: function () {
        try {
            const xhttp = new XMLHttpRequest();
            xhttp.onload = function () {
                alert("Lista", this.responseText);
                console.log(this.responseText);
                return this.responseText;
            }
            xhttp.open("GET", "http://localhost:8000/usuario/list", false);
            //Header da mensagem: todas as origins
            xhttp.setRequestHeader("Access-Control-Allow-Origin", "*");
            //Header da mensagem: conteúdo é um json com caracteres utf-8
            xhttp.setRequestHeader("Content-type", "application/json;charset=utf-8");
            xhttp.send();
        } catch (error) {
            console.error(error);
            alert("Erro: " + error);
        }
    }


}