searchCep.addEventListener('click', () => {
    let caracteres = ''
    cepValues.forEach((e) => {
        caracteres += e.value
    })

    requestCep(caracteres)
})