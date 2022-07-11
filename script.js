

let bar = document.querySelectorAll('.tooltip');

bar.addEventListener('click', ()=>{
    if (bar.classList.contains('tooltip')) {
        bar.classList.add('show');
    } else{
        bar.classList.remove('show');
    }
})