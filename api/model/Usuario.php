<?php
include_once('./service/DAO.php');

class User 
{
    public $id_usuario;
    public $nome;
    public $cpf;
    public $email;
    public $senha;
    public $telefone;
    public $foto;
    public $data_nasc;
    public $ativo = true;



    public function add()
    {
        try {
            $dao = new DAO;
            $conecta = $dao->conecta();
            $sql = "INSERT into usuario (nome, cpf, email, senha, telefone, data_nasc) VALUES (:nome, :cpf, :email, md5(:senha), :telefone, :data_nasc)";
            $criptSenha = crypt($this->senha, '$5$rounds=5000$' . $this->email . '$');
            $stman = $conecta->prepare($sql);
            $stman->bindParam(":nome", $this->nome);
            $stman->bindParam(":cpf", $this->cpf);
            $stman->bindParam(":email", $this->email);
            $stman->bindParam(":data_nasc", $this->data_nasc);
            $stman->bindParam(":senha", $criptSenha);
            $stman->bindParam(":telefone", $this->telefone);
            $stman->execute();
        } catch (Exception $e) {
            throw new Exception("Erro ao cadastrar usuario!!!" . $e->getMessage());
        }
    }

}
