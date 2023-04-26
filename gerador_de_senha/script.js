function gerarsSenha(){
    const senha = document.querySelector('#isenha');
    senha.value = ""
    const num = document.querySelector('#inum');

    let caracteres = ['a', 'b', 'c', 'd','e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '!', '@', '#']
    if(num.value <= 0 || num.value === ""){
        alert('ERRO: insira a quantidade de caracteres')
    }else{
        for(let i = 0; i < num.value; i++){
            let indiceSorteado = Math.floor(Math.random() * caracteres.length)
            senha.value += caracteres[indiceSorteado]
        }
    }
    
    // gerar uma senha
    // resgatar a senha
    // e colocar como value do input
}