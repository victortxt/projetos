const submitBtn = document.querySelector('#submit');
const opt = document.querySelectorAll('.option');
const comprimentoSenha = document.querySelector('#lengthSenha');
const valueComprimento = document.querySelector('#outputValue');
const levels = document.querySelectorAll('.level');
const strength = document.querySelector('#output-seguranca');
const output = document.querySelector('#output')






comprimentoSenha.addEventListener('input', () => {
    valueComprimento.innerHTML = comprimentoSenha.value
})

let caracteres = Array()

// a b c d e f g h i j k l m n o p q r s t u v w x y z
// 1 2 3 4 5 6 7 8 9 0
// ! @ # $ % ¨& * ( ) _

const letras = Array('a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z');

const numbers = Array('1', '2', '3', '4', '5', '6', '7', '8', '9', '0');

const simb = Array('!', '@', '#', '$', '%', '¨','&', '*', '(', ')', '_', ')');

let chave = false


submitBtn.addEventListener('click', () => {

    const senhaRandomica = () => {
        console.log(caracteres)
        let senha = ''
        for(let i = 0; i < comprimentoSenha.value; i++){
            let random = Math.floor(Math.random() * caracteres.length);
            console.log(random)
            senha += caracteres[random]
        }
        console.log(senha);
        output.innerHTML = senha;
        console.log(senha)
        chave = true

    }

    const selecionandoCaracteres = (id) => {
        switch(id){
            case 'iUp':
                letras.forEach(element => {
                    let upperLetters = element.toUpperCase();
                    caracteres.push(upperLetters)
                });

                break
            case 'iLow':
                letras.forEach(element => {
                    let lowerLetters = element.toLowerCase();
                    caracteres.push(lowerLetters)
                });

                break
            case 'iNum':
                numbers.forEach(element => {
                    let number = element;
                    caracteres.push(number)
                });
                break
            case 'Isimbol':
                simb.forEach(element => {
                    caracteres.push(element)
                });
                break
        }
        senhaRandomica();
    }

    opt.forEach(element => {
            if(element.checked){
                selecionandoCaracteres(element.id)
            }
    });

    //--- levels 
    const level = () => {
        if(comprimentoSenha.value < 10){
            return '0'
        }else if(comprimentoSenha.value >= 10 && comprimentoSenha.value <= 16){
            return '1'
        }else if(comprimentoSenha.value > 16 && comprimentoSenha.value <= 20){
            return '2'
        }
    }
    
    switch(level()){
        case '0':
            levels[0].style.background = 'red'
            levels[1].style.background = 'red'
            levels[2].style.background = 'transparent'
            levels[3].style.background = 'transparent'
            strength.textContent = 'Senha fraca';

            break
        case '1':
            levels[0].style.background = 'yellow'
            levels[1].style.background = 'yellow'
            levels[2].style.background = 'yellow'
            levels[3].style.background = 'transparent'
            strength.textContent = 'Senha media';
            break
        case '2':
            levels[0].style.background = 'green'
            levels[1].style.background = 'green'
            levels[2].style.background = 'green'
            levels[3].style.background = 'green'
            strength.textContent = 'Senha Forte';
            break
        
    }


    console.log('---')


    const reset = () => {
        caracteres = [];
    }

    if(chave){
        reset();
    }

    

})


console.log(caracteres)

copy.addEventListener('click' ,() => {
    navigator.clipboard.writeText(output.textContent)
    alert('texto copiado !')
})

