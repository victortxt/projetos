const submit = document.querySelector('#submit');
const output = document.querySelector('#output');
const outputletters = document.querySelector('#output-letters');
const btnBackGame = document.querySelectorAll('.backGame')
const palavraChaveArray = Array();  
let respostaInput = Array();
let letters = Array()
let chances = 5
let textInput = document.querySelectorAll('.textInput');




btnBackGame.forEach((btn) => {
    btn.addEventListener('click', () => {
        location.reload()
    })
})

/*
btnBackGame2.addEventListener('click', () => {
    location.reload()
})

btnBackGame1.addEventListener('click', () => {
    location.reload()
})
*/

//
textInput.forEach((input) => {
    input.addEventListener('keypress', (e) => {
      if (e.target.value.length > 0) {
        e.target.value = '';
      }
    });
  });

let indicePalavra = 0

const randomizarPalavraChave = () => {
    if(indicePalavra === 0){
    indicePalavra++
    let arrayLetras = ['falar', 'bravo', 'chave', 'grito', 'sonho', 'lindo', 'praia', 'risco', 'festa', 'beijo', 'suave', 'fugir', 'amigo', 'luxos', 'nobre', 'leite', 'corpo', 'verde', 'feliz', 'quero', 'viver', 'poder', 'dizer', 'pedra', 'correr', 'risos', 'maçãs', 'canta', 'beber', 'poste', 'rosas', 'campo', 'força', 'lutar', 'sabor', 'rindo', 'cores', 'cafés', 'brisa', 'balão', 'mente', 'melão', 'chuva', 'nuvem', 'salto', 'pular', 'fogue', 'azule', 'terras', 'praça', 'amora', 'torta', 'texto', 'poema', 'tinta', 'tecla', 'abrir', 'olhos'];
    let random = Math.floor(Math.random() * arrayLetras.length)
    return arrayLetras[random]
}
}

let palavraEscolhida = randomizarPalavraChave()


const palavraChave = () => {

    palavraChaveArray[0] = palavraEscolhida[0]
    palavraChaveArray[1] = palavraEscolhida[1]
    palavraChaveArray[2] = palavraEscolhida[2]
    palavraChaveArray[3] = palavraEscolhida[3]
    palavraChaveArray[4] = palavraEscolhida[4]
    
    return palavraChaveArray
}



submit.addEventListener('click', () => {
    
    let hasAlert = false; // variável que indica se houve alerta ou não

    textInput.forEach((e) => {

        if(e.value === ""){
            hasAlert = true; // marca que houve alerta
        }
    });

    // Se houve alerta, sai da função sem executar o resto do código
    if(hasAlert){

        alert('ERRO')
        return
    }

    

    textInput.forEach((e) => {
        respostaInput.push(e.value)
    })

    let winner = Array()
    // | erros

    if(chances > -1){
        output.innerHTML = chances
        chances--
        for(let i = 0; i < respostaInput.length; i++){
                    
            if((respostaInput[i].toLowerCase()) === palavraChave()[i]){
                document.querySelector('#opt' + i).style.backgroundColor = 'green';
                document.querySelector('#opt' + i).style.color = 'white';
                document.querySelector('#correct').innerHTML += respostaInput[i] + ' | ' 
                winner.push(respostaInput[i])
                console.log(winner)
                if(winner.length === 5){
                    setTimeout(() => {
                        document.querySelector('#winner').style.display = 'block'
                        document.querySelector('#container').style.display = 'none'
                    }, 1000);
                } 
                
            }else if(palavraChave().includes(respostaInput[i].toLowerCase())){
                document.querySelector('#opt' + i).style.backgroundColor = 'yellow'

                document.querySelector('#opt' + i).style.color = 'white'

                document.querySelector('#incluso').innerHTML += respostaInput[i];

            }else{
                document.querySelector('#opt' + i).style.backgroundColor = 'red';

                document.querySelector('#opt' + i).style.color = 'white';

               document.querySelector('#erros').innerHTML +=  respostaInput[i] + ' | ' 

            }
            
        }

        }
        
        if(chances === -1){
            if(winner.length === 5){
                setTimeout(() => {
                    document.querySelector('#winner').style.display = 'block'
                    document.querySelector('#container').style.display = 'none'
                }, 1000);
            }else{
                document.querySelector('#loser').style.display = 'block'

                    document.querySelector('#palavraEscolhida').innerHTML = palavraEscolhida
                        
                    document.querySelector('#container').style.display = 'none'
            }
            }

                respostaInput = []
        })

            