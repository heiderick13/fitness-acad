export class User {
    constructor(
        id_usuario = null,
        nome = "",
        foto = "",
        cpf = "",
        email = "",
        senha = "",
        telefone = "",
        data_nasc = null,
        ativo = true
    ) {
        this.id_usuario = id_usuario;
        this.nome = nome;
        this.foto = foto;
        this.cpf = cpf;
        this.email = email;
        this.senha = senha;
        this.telefone = telefone;
        this.data_nasc = data_nasc;
        this.ativo = ativo;
    }

}