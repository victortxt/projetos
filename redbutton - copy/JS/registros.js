let regs = document.querySelector('#regs')
const filterInput = document.querySelector('#isearch')

filterInput.addEventListener('keyup', (e) => {
    let value = e.target.value.trim().toLowerCase()

    regs.querySelectorAll('div .contents').forEach((element) => {
        //element
        let type = element.querySelector('h2').textContent.trim().toLowerCase()
        let lastIndex = type.lastIndexOf(' ');
        let textType = type.substring(lastIndex)

        let local = element.querySelector('h3').textContent.trim().toLowerCase()
        let textLocal = (local.replace(/local: | \| /g, ''));



        if(value){
            if(textType.includes(value) || textLocal.includes(va)){
                element.parentNode.style.display = 'flex'
            }else{
                element.parentNode.style.display = 'none'
            }
        }else{
            regs.querySelectorAll('div .contents').forEach((element) => {
                element.parentNode.style.display = 'flex'
            })
        }

    })  

})

const requestFunc = () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'http://localhost/redbutton/PHP/getRegistros.php')
    
    request.onreadystatechange = () => {
        if(request.status == 200 && request.readyState == 4){

            let JSONresponse = request.responseText
            let JSresponse = JSON.parse(JSONresponse)
            let id = 0
            console.log(JSresponse)

            JSresponse.forEach(element => {
                let divContainer = document.createElement('div')
                divContainer.id = id
                divContainer.className = 'card-ocorrencia';
                regs.appendChild(divContainer);

                let divContents = document.createElement('div')
                divContents.className = 'contents'
                divContainer.appendChild(divContents)

                let titleOcorrencia = element.ocorrencia;
                let titleIndex = titleOcorrencia.indexOf(' '); // You need to provide a valid substring here
                let textTitle = titleOcorrencia.substring(0, titleIndex);


                let typeOcorrencia = document.createElement('h2');
                typeOcorrencia.innerHTML = 'Ocorrência: ' + textTitle
                divContents.appendChild(typeOcorrencia)

                let localOcorrencia = document.createElement('h3');
                localOcorrencia.innerHTML = 'Local: ' + element.uf + ' | ' + element.bairro
                divContents.appendChild(localOcorrencia);

                let button = document.createElement('button')
                button.className = 'viewDetails'
                button.innerHTML = 'Ver detalhes'
                divContainer.appendChild(button)
                id++

                document.querySelectorAll('.viewDetails').forEach((e) => {
                        e.addEventListener('click', (element) => {
                            let thisBtn = element.target
                            let mainDiv = thisBtn.parentNode.id
                            parseInt(mainDiv)
                            
                            document.querySelector('#ocorrencia').innerHTML = JSresponse[mainDiv].ocorrencia
                            document.querySelector('#cep').innerHTML = JSresponse[mainDiv].cep
                            document.querySelector('#logradouro').innerHTML = JSresponse[mainDiv].logradouro
                            document.querySelector('#bairro').innerHTML = JSresponse[mainDiv].bairro
                            document.querySelector('#localidade').innerHTML = JSresponse[mainDiv].localidade
                            document.querySelector('#uf').innerHTML = JSresponse[mainDiv].uf
                            document.querySelector('#ddd').innerHTML = JSresponse[mainDiv].ddd
                            
                            document.querySelector('#registros-container').style.display = 'none';
                            document.querySelector('#containerDetails').style.display = 'block';
                        })
                })

            })
        } 
    }
        request.send();
}

document.querySelector('#closeDetails').addEventListener('click', () => {
    document.querySelector('#registros-container').style.display = 'block';
    document.querySelector('#containerDetails').style.display = 'none';
})

requestFunc();

