const navbar=document.querySelector('#nav-bar');
const options=document.querySelector('#options');

navbar.addEventListener('click' , ()=>{
    if(options.classList.contains('hidden')){
        options.classList.remove('hidden')
    }else{
        options.classList.add('hidden')
    }
})