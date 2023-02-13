const pageAmount = document.querySelector('.page_amount')
const moneyAmount = document.querySelector('.money_amount')
const time = document.querySelector('.time')
const rangeInput = document.querySelector('.range_input')
const toggleBtn = document.querySelector('.toggle')

toggleBtn.addEventListener('click',()=>{
    toggleBtn.classList.toggle('active')
    let value = rangeInput.value
    if(toggleBtn.classList.contains('active')){
        moneyAmount.innerHTML = ((((value * 0.16)*12)/100)*75).toFixed(2)
    }else{
        moneyAmount.innerHTML = (value * 0.16).toFixed(2)
    }
})

rangeInput.addEventListener('input',()=>{
    let value = rangeInput.value
    pageAmount.innerHTML = value
    if(toggleBtn.classList.contains('active')){
        moneyAmount.innerHTML = ((((value * 0.16)*12)/100)*75).toFixed(2)
    }else{
        moneyAmount.innerHTML = (value * 0.16).toFixed(2)
    }
})

