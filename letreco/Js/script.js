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
    let random = Math.floor(Math.random() * 23)
    switch(random){
        case 0:
            return 'casas'
        case 1: 
            return 'carros'
        case 2:
            return 'patos'
        case 3: 
            return 'cacos'
        case 4:
            return 'matos'
        case 5:
            return 'costa'
        case 6:
            return 'casca'
        case 7:
            return 'pasta'
        case 8:
            return 'marca'
        case 9: 
            return 'morte'
        case 10:
            return 'forte'
        case 11:
            return 'corre'
        case 12:
            return 'goste'
        case 13: 
            return 'janta'
        case 14:
            return 'porte'
        case 15: 
            return 'mouse'
        case 16:
            return 'html;'
        case 17:
            return 'perna'
        case 18:
            return 'bravo'
        case 19:
            return 'fabio'
        case 20:
            return 'manco'
        case 21: 
            return 'casal'
        case 22:
            return 'nação'
        case 23:
            return 'cinco'
            
        }
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

    if(chances > 0){
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

            }else{
                document.querySelector('#opt' + i).style.backgroundColor = 'red';

                document.querySelector('#opt' + i).style.color = 'white';

               document.querySelector('#erros').innerHTML +=  respostaInput[i] + ' | ' 

            }
    }
        }else if(chances === 0){

            document.querySelector('#loser').style.display = 'block'

            document.querySelector('#palavraEscolhida').innerHTML = palavraEscolhida
                
            document.querySelector('#container').style.display = 'none'

        }

            respostaInput = []
        })