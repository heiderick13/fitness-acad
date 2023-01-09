<?php
include('./model/Usuario.php');


function usuarioController($method, $router)
{
    
    
    //POST METHODS
    if ($method == "POST") {
        if (!empty(strstr($router, "/user/add"))) {
            try {
                $convert = json_decode(file_get_contents("php://input"));
                $user = new User();
                $user->nome = $convert->nome;
                $user->cpf = $convert->cpf;
                $user->email = $convert->email;
                $user->senha = $convert->senha;
                $user->data_nasc = $convert->data_nasc;
                $user->telefone = $convert->telefone;
                $user->add();
                echo "Usuario Cadastrado!";
            } catch (Exception $e) {
                echo "Erro:" . $e->getMessage();
            }
        }
    };
}