


function horario(){
    let data = new Date();
    const hora = document.querySelector('#hora')
    const min = document.querySelector('#minutos')
    const seg = document.querySelector('#segundos')
    
    let h = data.getHours()
    let m = data.getMinutes()
    let s = data.getSeconds()

    hora.textContent = h 
    min.textContent = m
    seg.textContent = s
}

setInterval(horario, 1000)



/*
hora
minutos
segundos
*/