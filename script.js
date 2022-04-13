let spans = document.querySelectorAll("span")
let main_container = document.querySelector('.main-container')
let par = document.querySelector('.rate-result')
let rate
let selected = false

spans.forEach(span=>{
    span.addEventListener('click',()=>{
        span.classList.toggle('selected')
        selected = true

        rate = span.dataset.value
    })
})

function GO_TO_THANK_YOU(){
    if(selected === true){
        main_container.classList.add('show')
        par.textContent = `You selected ${rate} out of 5`
    }else{
        return
    }
}