/*
container
container-edit
*/

alert('teste')

const tareta = document.querySelector('#tarefa');
const btnSubmit = document.querySelector('#submit');
const output = document.querySelector('#output');
const messageDefault = document.querySelector('#cardMessageDefault')

const editSub = document.querySelector('#editSub');
const input_edit = document.querySelector('#edit-tarefa');

const container = document.querySelector('#container')
const container_edit = document.querySelector('#container-edit')



const mensagemDefault = () => {
    if(document.querySelectorAll('#output div').length == 1 || document.querySelectorAll('#output div').length == 0){
        messageDefault.className = 'messageDefault'
        messageDefault.style.display = 'block'
    }else{
        messageDefault.className = 'nonemessageDefault'

        setTimeout(() => {
            messageDefault.style.display = 'none'
        }, 1000)
    }
}

addEventListener('load', () => {
    mensagemDefault();
})

let arrayTitle = []

btnSubmit.addEventListener('click', () => {

    if(tareta.value === ""){
        alert('ERRO: preencha os dados corretamente !');
    }else{
        let card = document.createElement('div');
        card.className = 'createDiv';
        output.appendChild(card)

        let title = document.createElement('h2');
        title.innerHTML = tarefa.value
        title.className = 'createTitle';
        card.appendChild(title)

        arrayTitle.push(title.textContent)

        let sessaoBtn = document.createElement('section');
        sessaoBtn.className = 'createBtn';
        card.appendChild(sessaoBtn);

        let BtnOk = document.createElement('button');
        BtnOk.id = 'btnOk'
        BtnOk.textContent = 'ok'
        sessaoBtn.appendChild(BtnOk);
        let i = 0;


        BtnOk.addEventListener('click', (e) => {
            let sessao = e.target.parentNode
            let container = sessao.parentNode
            if(i === 0){
                i++
                container.className = 'cardOK'
            }else{
                i--
                container.className = 'createDiv'
            }
            
        })


        //--------------------------------

        let BtnX = document.createElement('button');
        BtnX.id = 'btnX'
        BtnX.textContent = 'X';
        sessaoBtn.appendChild(BtnX);

        BtnX.addEventListener('click', (e) => {
            let sessao = e.target.parentNode
            let container = sessao.parentNode
            container.className = 'Xcard'
            setTimeout(() => {
                container.remove()
                mensagemDefault();

            }, 1500)

        })

        // | editSub


        let BtnEdit = document.createElement('button');
        BtnEdit.id = 'btnEdit'
        BtnEdit.textContent = 'Edit';
        sessaoBtn.appendChild(BtnEdit);



        const handleEdit = () => {
            let edit = e.target.parentNode;
            let card = edit.parentNode;
            let h2 = card.querySelector('h2');
            h2.textContent = input_edit.value;
        }
        
        const FuncEdit = (e) => {
            const edit = e.target.parentNode;
            const card = edit.parentNode;
            const h2 = card.querySelector('h2');
        
            const handleEdit = () => {
                h2.textContent = input_edit.value;
            };
        
            const handleEditSubClick = () => {
                container.className = 'container-edit-block'

                container_edit.style.display = 'none'
                container.style.display = 'block'
                
                handleEdit();
                editSub.removeEventListener('click', handleEditSubClick);
            };

            editSub.addEventListener('click', handleEditSubClick);
            
            container.className = 'container-none'
            container_edit.className = 'container-edit-block'
        
            setTimeout(() => {
                container.style.display = 'none'
                container_edit.style.display = 'block'
            }, 1000);
            
            BtnEdit.removeEventListener('click', handleEditSubClick);
        };
        
        BtnEdit.addEventListener('click', FuncEdit);
    }
    mensagemDefault();
})


let input_filtro = document.querySelector('#input-filtro');

input_filtro.addEventListener('keyup', () => {
    let filtro = arrayTitle.filter((element) => {
        for (let i = 0; i < element.length; i++) {
            if (element[i].indexOf(input_filtro.value) !== -1) {
                return true; // O elemento deve ser incluído no novo array filtrado
            }
        }
        return false; // O elemento não atende ao critério de filtragem
    });

    console.log(filtro);

    let h2 = output.querySelectorAll('div h2')

    

    h2.forEach(element => {
        let text = element.textContent
            if(input_filtro.value === text){
                element.parentNode.style.display = 'block'
            }else if(input_filtro.value === ""){
                element.parentNode.style.display = 'block'
            }else{
                element.parentNode.style.display = 'none'
            }
    });
});




