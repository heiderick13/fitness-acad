<?php
include('./config/config_prod.php');
//include('./config/config_dev.php');
include('./controller/usuario.php');

if (isset($_SERVER["REQUEST_METHOD"]) || isset($_SERVER["REQUEST_URI"]))
{
$method = $_SERVER["REQUEST_METHOD"];
$router = $_SERVER["REQUEST_URI"];
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    if ($method == "OPTIONS") {
        header("Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS");
        header("Access-Control-Allow-Headers: *");
        header("Access-Control-Max-Age: 3600"); //1hora == 3600 seg;
        header("Access-Control-Allow-Credentials: true");
    }
    
    
}

usuarioController($method, $router);