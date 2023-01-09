<?php
// Configuração do PHP
error_reporting(E_ALL);
ini_set("display_errors", 1);
ini_set('display_startup_errors', 1);
ini_set("enable_post_data_reading", 1);

define("DRIVE", "mysql"); // Qual tipo de banco de dados
define("HOST", "localhost"); // url ou ip do local do banco de dados
define("PORT", "3306"); // Porta de acesso ao banco de dados
define("USER", "root"); // Usuario do banco de dados
define("DB", "lojaWeb"); // Nome do banco de dados

define("MIDIAS_USER", "/../midias/user"); // Local da pasta onde será gravado os dados
define("MIDIAS_PRODUTOS", "/../midias/produtos"); // Local da pasta onde será gravado os dados
define("KEY", "");

// Senha do banco de dados
define("PASS", "");

?>