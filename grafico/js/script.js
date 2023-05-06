const d = document.querySelector('#isucess');
const ed = document.querySelector('#ied');
const nd = document.querySelector('#ind');
const sub = document.querySelector('#submit');

const elementGraf = (ed, nd, d) =>{

    const pd = document.querySelector('.d')
    const ped = document.querySelector('.ed')
    const pnd = document.querySelector('.nd')

    // implementar uma lógica de porcentagem para cada elemento :)
    let Ned = parseInt(ed)
    let Nnd = parseInt(nd)
    let Nd = parseInt(d)

    const soma =  Ned + Nnd + Nd;
    console.log('soma: ' + soma)
    
    const porcentagemD = Nd / soma* 100
    console.log('porcentagem D: ' + porcentagemD + '%')

    const porcentagemED = Ned / soma * 100
    console.log('porcentagem ED: ' + porcentagemED + '%')

    const porcentagemND = Nnd / soma * 100
    console.log('porcentagem ND: ' + porcentagemND + '%')

    outputD = document.querySelector('#outputD');
    outputED = document.querySelector('#outputED');
    outputND = document.querySelector('#outputND');
    
    outputD.innerHTML = porcentagemD.toFixed(2) + '%'
    outputED.innerHTML = porcentagemED.toFixed(2) + '%'
    outputND.innerHTML = porcentagemND.toFixed(2) + '%'


    //8.33%

    pd.style.height = porcentagemD + 'px'
    ped.style.height = porcentagemED + 'px'
    pnd.style.height = porcentagemND + 'px'
}

sub.addEventListener('click', () =>{
    if(!(ed.value === "" || nd.value === "" || d.value === "")){
        elementGraf(ed.value, nd.value, d.value)    
    }else{
        alert('preencha todos os dados')
    }
})