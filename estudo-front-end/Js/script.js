/*
left
right
container-quadros
*/


const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');
const ContainerContents = document.querySelector('#container-quadros');
const contentsFilhos = ContainerContents.querySelectorAll('div')
const numContents = contentsFilhos.length
//quadro1

let i = 0
console.log(i)

leftBtn.addEventListener('click', () => {
    
    if(i > 0){
        document.querySelector('#quadro' + i).style.display = "block"
        document.querySelector('.content' + i).style.display = "block"
        i--
        console.log(i)

    }
})

rightBtn.addEventListener('click', () => {
    
    if(i >= 0 && i < numContents - 1){
        i++
        document.querySelector('#quadro' + i).style.display = "none"
        document.querySelector('.content').style.display = "none"
        
        console.log(i)

    }
})