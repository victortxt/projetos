const btn = document.querySelectorAll('.selectBtn')
const cepValues = document.querySelectorAll('.cepValue')
const searchCep = document.querySelector('#searchCep')
const cepContainer = document.querySelector('#cepContainer')
const cardMenu = document.querySelector('#cardMenu')
//--- btn Google
const openMenuBtn = document.querySelector('#openMenuBtn')
const closeBtn = document.querySelector('#closeBtn')

$('#backBtn').click(() => {
    $('main').fadeToggle('slow')
    $('#ContainerDados').fadeToggle('slow')
})

const stateMenu = () => {
    $('#cardMenu').fadeToggle('slow')
    $('main').fadeToggle('slow')
}

closeBtn.addEventListener('click', stateMenu)

openMenuBtn.addEventListener('click', stateMenu)

//Requisição e criação do card com os valores
const requestCep = (value) => {
    let request = new XMLHttpRequest();
    
    request.open('GET', `http://viacep.com.br/ws/${value}/json/`)

    request.onreadystatechange = () => {

        if(request.readyState === 4 && request.status === 200){

            let JSONresponse = request.responseText

            let response = JSON.parse(JSONresponse)

            

            if(response.erro){
                alert('o seu CEP da sua ocorrência não foi encontrado !');
                return
            }

            if(!response.erro){
                alert('o seu CEP da sua ocorrência foi encontrado !');
                

                

                /*
                    sessionStorage.setItem(1, response.cep)
                    sessionStorage.setItem(2, response.logradouro)
                    sessionStorage.setItem(3, response.bairro)
                    sessionStorage.setItem(4, response.localidade)
                    sessionStorage.setItem(5, response.uf)
                    sessionStorage.setItem(6, response.ddd)
                */

                if(sessionStorage.getItem(0)){
                    if(document.querySelector('main')){
                        $('main').fadeToggle('slow')
                    }

                    $('#ocorrenciaInput').val(sessionStorage.getItem(0))
                    $('#cepInput').val(response.cep)
                    $('#logradouroInput').val(response.logradouro)
                    $('#bairroInput').val(response.bairro)
                    $('#localidadeInput').val(response.localidade)
                    $('#ufInput').val(response.uf)
                    $('#dddInput').val(response.ddd)
                    $('#ContainerDados').fadeToggle('slow')
                }else{
                    alert('Falta inserir uma ocorrência !')
                }

                //logica de toggle
            }

        }

        if(request.readyState === 4 && request.status !== 200){
            alert('Erro: verifique se o seu CEP está correto e tente novamente')
        }
    }

    request.send();
}



//Interação dos input de CEP

cepValues.forEach((e) => {
    e.addEventListener('keyup', (element) => {

        let thisElement = element.target
        let lengths = thisElement.value.length
        let oldpos = 0

        if(lengths > 1){
            for(let i = 0; i < lengths; i++){
                if(oldpos < i ){
                    oldpos = i
                }
            }
    
            thisElement.value =  thisElement.value[oldpos]
        }
        
        for(let i = 0; i < cepValues.length; i++){
            if(cepValues[i] === element.target){
                let nextIndex = cepValues[i + 1]
                if(nextIndex && cepValues[i].value){
                    nextIndex.focus();
                }

                if(element.key == 'Backspace'){
                    nextIndex = cepValues[i - 1]
                    nextIndex.focus();
                }
            }

            
        }
        
    })
})



// Selecionamento de ocorrências
btn.forEach((e) => {
    e.addEventListener('click', (element) => {
        let card = element.target.parentNode
        let description = card.querySelector('.description')
        let typeOcorrencia = description.querySelector('h3').textContent

        sessionStorage.setItem(0, typeOcorrencia)

        document.querySelector('#TypeOcorrencia').innerHTML = 'Ocorrência selecionada: ' + typeOcorrencia

        document.querySelector('#cepContext').innerHTML = ' de ' + typeOcorrencia
    })
})

const configGlobal = () => {
    sessionStorage.clear();
}

addEventListener('load', configGlobal)