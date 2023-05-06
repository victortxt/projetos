const BtnAdicionar = document.querySelector('#adicionar');
const inputTarefas = document.querySelector('#itarefas');
const container = document.querySelector('#container-element')
let numFilhos = container.childElementCount;




indiceID = 0


BtnAdicionar.addEventListener("click", () =>{

    if(!(inputTarefas.value === "")){
        indiceID++
        numFilhos++
        mensagemUndefined(true)
        
        let nullMessage = document.querySelector('#content-message')
        if(nullMessage){
            nullMessage.remove()
        }

        
        //--
        console.log(numFilhos)
        //--
        let elemento = document.createElement('div')
        elemento.id = 'item' + indiceID
        console.log(elemento.id)
        elemento.className = 'elemento';
        container.appendChild(elemento)
        //----
        let texto = document.createElement('div')
        texto.className = 'text'
        elemento.appendChild(texto)

        let title = document.createElement('h3')
        title.id = 'txtID'
        title.innerHTML = inputTarefas.value
        texto.appendChild(title)
        //---
        let content = document.createElement('div')
        content.className = 'contents'
        elemento.appendChild(content)
        //---
        // btn - id
        let done = document.createElement('button');
        let remove = document.createElement('button');
        let edit = document.createElement('button');
        done.textContent = 'OK'
        remove.textContent = 'X'
        edit.textContent = 'Edit'

        console.log(done)

        content.appendChild(done)
        content.appendChild(remove)
        content.appendChild(edit)

        let i = 0
        done.addEventListener('click', () => {
            const divBtn = done.parentNode
            const line = divBtn.parentNode
            if(i === 0){
                line.className = 'done-line'
                i++
            }else{
                console.log(`negativo: ${i}`)
                i--
                line.className = 'elemento'
            }
        })

        remove.addEventListener('click', () => {
            const divBtn = done.parentNode
            const line = divBtn.parentNode
            line.remove()
            numFilhos--
            if(numFilhos === 0){
                mensagemUndefined(false)
            }
            
        })

        edit.addEventListener('click', (event) => {
            const editContainer = document.querySelector('#edit-container')
          
            let content = event.target.parentNode
            let txtSection = content.previousElementSibling
            let h3Element = txtSection.querySelector('h3')
          
            editContainer.style.display = 'block'
            container.style.display = 'none'
          
            let output = document.querySelector('#output')
            output.innerHTML = h3Element.textContent
          
            const alterar = document.querySelector('#alterar')
            let handleAlterar = null
          
            handleAlterar = () => {
              let inputAlterar = document.querySelector('#alteração-tarefa').value
              h3Element.innerHTML = inputAlterar
              editContainer.style.display = 'none'
              container.style.display = 'block'
              alterar.removeEventListener('click', handleAlterar)
            }
          
            alterar.addEventListener('click', handleAlterar)
          
            // backpage
            let backpage = document.querySelector('#backpage')
          
            backpage.addEventListener('click', () =>{
              editContainer.style.display = 'none'
              container.style.display = 'block'
              alterar.removeEventListener('click', handleAlterar)
            })
          })
          
    }

    console.log(container)
})

const mensagemUndefined = (f) => {

        console.log(numFilhos, f)
        if(numFilhos === f || numFilhos === 0){
            let message = document.createElement('div')
            container.style.display = 'block'
            message.id = 'content-message'
            message.textContent = 'Nenhuma tarefa foi encontrada :/'
            container.appendChild(message)
        }
}