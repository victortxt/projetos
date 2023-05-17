const title = document.querySelector('#titleText');
const text = document.querySelector('#textareaText');
const salvar = document.querySelector('#salvar');
const cardElements = document.querySelector('#elements'); 
const createElements = document.querySelector('#container-text'); //container-text
const acessContainer = document.querySelector('#acess-container'); 

const textAcess = document.querySelector('#itxtAcess');
const AreaTxtAcess = document.querySelector('#iAreaTxtAcess');
const closeBox = document.querySelector('#close');
const edit = document.querySelector('#edit');

const close = () => {
    cardElements.style.display = 'flex'
    createElements.style.display = 'flex'
    acessContainer.style.display = 'none'
}



closeBox.addEventListener('click', () => {
    close();
})
/*
close
edit
*/

let i = 0


salvar.addEventListener('click', () => {

    if(!(title.value === "" && text.value === "")){
        i++
        let divCard = document.createElement('div')
        divCard.className = 'card'
        cardElements.appendChild(divCard)
    
        let h3 = document.createElement('h3');
        h3.innerHTML = title.value
        h3.id = 'h3' + i
        divCard.appendChild(h3)
    
        let decricao = document.createElement('div');
        decricao.className = 'description';
        decricao.id = 'd' + i
        decricao.innerHTML = text.value;
        divCard.appendChild(decricao);
    
        let btnAcessar = document.createElement('button')
        btnAcessar.className = 'btnDefault'
        btnAcessar.innerHTML = 'Acessar'
        divCard.appendChild(btnAcessar);
    
        btnAcessar.addEventListener('click', (e) => {
            createElements.style.display = 'none'; //visible
            cardElements.style.display = 'none';
            acessContainer.style.display = 'flex';
    
            textAcess.value = h3.textContent
            AreaTxtAcess.value = decricao.textContent
    
            let x = e.target
            let divPai  = x.parentNode
            let h3ID = divPai.querySelector('h3')
            let dID = divPai.querySelector('div')

            let btnEdit = null
            btnEdit = () => {
                if (!(textAcess.value === "" || AreaTxtAcess.value === "")) {
                    h3ID.innerHTML = textAcess.value;
                    dID.innerHTML = AreaTxtAcess.value;
                    close();
                    edit.removeEventListener('click', btnEdit);
                }
            };

            edit.addEventListener('click', btnEdit)

            
        })

        let btnExcluir = document.createElement('button')
        btnExcluir.className = 'btnDanger'
        btnExcluir.innerHTML = 'Excluir'
        divCard.appendChild(btnExcluir);
    
        btnExcluir.addEventListener('click', (e) => {
            e.target.parentNode.remove();
        })

        title.value = ''
        text.value = ''
    }else{
        alert('ERRO')
    }
   
})