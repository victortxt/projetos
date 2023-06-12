/*
hora
min
seg
*/

const hora = document.querySelector('#hora');
const min = document.querySelector('#min');
const seg = document.querySelector('#seg');
const quadros = document.querySelectorAll('.time')


setInterval(() => {
    const horaNew = new Date();

    
    hora.textContent = horaNew.getHours() ;
    min.textContent = horaNew.getMinutes() ;
    seg.textContent = horaNew.getSeconds() ;

    if(horaNew.getHours() < 10){
        hora.textContent = '0' + horaNew.getHours();
    }

    if(horaNew.getMinutes() < 10){
        min.textContent = '0' + horaNew.getMinutes();
    }

    if(horaNew.getSeconds() < 10){
        seg.textContent = '0' + horaNew.getSeconds();
    }

    quadros.forEach(element => {
        element.className = 'time';
    });
}, 1000)

