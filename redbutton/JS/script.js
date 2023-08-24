const btn = document.querySelectorAll('.selectBtn')
const cepValues = document.querySelectorAll('.cepValue')
const searchCep = document.querySelector('#searchCep')
const cepContainer = document.querySelector('#cepContainer')
const cardMenu = document.querySelector('#cardMenu')
//--- btn Google
const openMenuBtn = document.querySelector('#openMenuBtn')
const closeBtn = document.querySelector('#closeBtn')

const stateMenu = () => {
    if(cardMenu.offsetWidth != 0){
        cardMenu.style.display = 'none'
        return
    }

    if(cardMenu.offsetWidth === 0){
        cardMenu.style.display = 'block';
        return
    }
    
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
                console.log(response)
                sessionStorage.setItem(1, response.cep)
                sessionStorage.setItem(2, response.logradouro)
                sessionStorage.setItem(3, response.bairro)
                sessionStorage.setItem(4, response.localidade)
                sessionStorage.setItem(5, response.uf)
                sessionStorage.setItem(6, response.ddd)

                if(document.querySelector('#dados')){
                    document.querySelector('#dados').remove();
                }
                
                    let divContainer = document.createElement('div')
                    divContainer.id = 'dados'
                    cepContainer.appendChild(divContainer);

                    let form =  document.createElement('form')
                    form.setAttribute('action', 'http://localhost/redbutton/PHP/insertData.php')
                    form.setAttribute('method', 'GET')
                    divContainer.appendChild(form)

                    let redButton = document.createElement('input')
                    redButton.value = 'Confirmar Ocorrência'
                    redButton.id = 'Redbutton'
                    redButton.setAttribute('type', 'submit');
                    form.appendChild(redButton)
                    

                    let info = {}

                    for(let i = 0; i < sessionStorage.length; i++){                        
                        if(!sessionStorage.getItem(i)){
                            let erro = document.createElement('p')
                            erro.className = 'erroMessage'
                            erro.innerHTML = 'ERRO: selecione a ocorrência primeiro'
                            divContainer.appendChild(erro)
                            document.querySelector('#Redbutton').remove();
                            info = {}
                            return
                        }
                    }

                    info = {
                        ocorrencia: sessionStorage.getItem(0),
                        cep: sessionStorage.getItem(1),
                        logradouro: sessionStorage.getItem(2),
                        bairro: sessionStorage.getItem(3),
                        localidade: sessionStorage.getItem(4),
                        uf: sessionStorage.getItem(5),
                        ddd: sessionStorage.getItem(6)
                    }

                    labelText = Array();

                    labelText = ['Ocorrência', 'Cep', 'Logradouro', 'Bairro', 'Localidade', 'Uf', 'ddd']
                    let indice = 0

                    for(let j in info){

                        let label = document.createElement('label')
                        label.className = 'label'
                        label.id = info[j] 
                        label.innerHTML = labelText[indice] + ':'
                        form.appendChild(label)

                        //--

                        let input = document.createElement('input')
                        input.id = info[j]
                        input.value = info[j]
                        input.setAttribute('name',  labelText[indice])
                        input.setAttribute('readonly', 'readonly')
                        input.setAttribute('type', 'text')
                        form.appendChild(input)

                        indice++
                    }

                    indice = 0

                return
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