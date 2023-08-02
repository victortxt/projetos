const submitBtn = document.querySelector('#Redbutton')
const myPosBtn = document.querySelector('#myPos')
const updateBtn = document.querySelector('#update')
const mapa = document.querySelector('#mapa')

const resetMap = () => {
   mapa.querySelectorAll('div').forEach((e) => {
        if(e){
            e.remove()
        }
   })

    let loading = document.createElement('img')
    loading.className = 'loading'
    loading.src = './img/R.gif'
    mapa.appendChild(loading)
}

const getLocalizacao = () => {
      removeEventListener('click', getLocalizacao)
      resetMap();

    let ajax = new XMLHttpRequest();

    ajax.open('GET', 'http://v100.000.pe/redbutton/PHP/getLocalizacao.php')

    ajax.onreadystatechange = () => {
    
    setTimeout(() => {
        if(ajax.status == 200 && ajax.readyState == 4){
            if(document.querySelector('.loading')){
                document.querySelector('.loading').remove();
            }

            let response = ajax.responseText
            let responseObj = JSON.parse(response);
            console.log(responseObj)

            /*
                        <div class="bolinha">
                            <div class="none " >
                                <div id="type" class="info">Ocorrencia</div>
                                <div id="date" class="info">DATA hora</div>
                            </div>
                        </div>
            */

            responseObj.forEach((e) => {
                let bolinha = document.createElement('div')
                bolinha.style.bottom = e.latitude + '%'
                bolinha.style.right = e.longitude + '%'
                bolinha.className = 'bolinha'
                mapa.appendChild(bolinha);

                let contents = document.createElement('div')
                contents.className = 'none'
                bolinha.appendChild(contents)

                let type = document.createElement('div')
                type.textContent = e.ocorrencia
                type.className='type info'
                contents.appendChild(type)

                let date = document.createElement('div')
                date.textContent = '12-09-2022'
                date.className = 'date info'
                contents.appendChild(date)
            })

            let i = 0
            document.querySelectorAll('.bolinha').forEach((e) => {

                e.addEventListener('click', (element) => {
                    let info = element.target.querySelector('div')

                    if(!i){
                        info.className = 'ocorrencia'
                        i++
                    }else{
                        i--
                        info.className = 'none'
                    }
            console.log(info)
                })
            })
            
        }
    }, 1000)

        
    }

    ajax.send()
}

updateBtn.addEventListener('click', getLocalizacao)

getLocalizacao();

addEventListener('load', () => {
    navigator.geolocation.getCurrentPosition(localizacao)
    sessionStorage.clear();
})

const localizacao = (pos) => {
    console.log('localizacao...')
    console.log(pos)

    if(pos){
        const latitude = pos.coords.latitude
        const longitude = pos.coords.longitude

        submitBtn.addEventListener('click', () => {

            if(sessionStorage.getItem(0) != null ||sessionStorage.getItem(0) != undefined ){
                window.location.href = 'http://v100.000.pe/redbutton/PHP/getLocalizacao.php?latitude=' + latitude + '&longitude=' + longitude + '&ocorrencia='                 + sessionStorage.getItem(0);
            }else{
                alert('Insira os dados corretamente !')
            }
            

        })  

        myPosBtn.addEventListener('click', () => {

            /*
                        <div class="effect-point">
                            <div class="point">
                                <p>Você está aqui !</p>
                            </div>
                        </div>
            */
            if(!document.querySelector("#effect1")){
                console.log(latitude + ' | ' + longitude)
                let effect = document.createElement('div')
                effect.id = 'effect1'
                effect.style.bottom = latitude + '%'
                effect.style.right = longitude + '%'
                effect.className = 'effect-point'
                mapa.appendChild(effect)

                let point = document.createElement('div')
                point.className = 'point'
                effect.appendChild(point)

                let p = document.createElement('p')
                p.textContent = 'Você está aqui !'
                point.appendChild(p)

                effect.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
                setTimeout(() => {
                    document.querySelector('#effect1').remove();
                }, 10000)
            }
        })
    }
}



document.querySelectorAll('.ocorrenciaTipo').forEach((e) => {
    e.addEventListener('click', (element) => {
        let container = element.target.parentNode

        let type = container.querySelector('article').querySelector('h3').textContent

        alert(`${type} foi selecionado`)

        sessionStorage.setItem(0, type) 
    }) 
})
