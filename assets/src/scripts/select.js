function addOption () {
    const gestationWeeks = document.querySelector('#gestation-select')
    
    for (let i = 1; i <= 42 ; i++) {
        if (i === 1) {
            gestationWeeks.insertAdjacentHTML('beforeend', `
            <option value="${i}">${i  + ' Semana'}</option>`)
        }
        else {
            gestationWeeks.insertAdjacentHTML('beforeend', `
            <option value="${i}">${i  + ' Semanas'}</option> `)
        }
   
    }
}

addOption()