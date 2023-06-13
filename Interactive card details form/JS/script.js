const submitBtn = document.querySelector('#submit');
const inputs = document.querySelectorAll('input');
const form = document.querySelector('#form');
const sucess = document.querySelector('#sucess');
const continueBtn = document.querySelector('#continue')

submitBtn.addEventListener('click', () => {
    let isEmpty = false;

    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value === '') {
            isEmpty = true;
            break;
        }
    }

    if (isEmpty) {
        document.querySelector('#erro').style.display = 'block'
    } else {
        document.querySelector('#erro').style.display = 'none'
        inputs.forEach(element => {
            element.value = ''
        })
        form.style.display = 'none'; // Oculta a sessão 'container-form'
        sucess.style.display = 'block';
    }
});

continueBtn.addEventListener('click', () => {
    form.className = 'anima';
    form.style.display = 'block';
    sucess.style.display = 'none';
});
