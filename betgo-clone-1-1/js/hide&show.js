console.log('hide&show')
// selecting the DOM
const closeAside = document.querySelector('aside > .sidebar-fluid > div ')
const aside = document.querySelector('aside')
const toggle = document.querySelector('nav > div:nth-child(1)    ')

// DOMContentLoaded changes in here
window.addEventListener('DOMContentLoaded',()=>{
    // if(!aside.classList.contains('.hideleft')){
        aside.classList.add('hideleft')
    // }

})

closeAside.addEventListener('click',()=>{
    // aside.style.display='none'
    aside.classList.add('hideleft')
})
toggle.addEventListener('click',()=>{
        aside.classList.remove('hideleft')
    // aside.classList.add('showleft')
})