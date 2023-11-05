

// let loader = document.querySelector('#preloader');

// window.addEventListener('load',function() {
//     loader.style.display = 'none';
// })


const ulTag = document.querySelector('.main nav .ulItems'),
menubar = document.querySelector('.main nav .menubar'),
links = document.querySelector('.main nav .links');


menubar.onclick = hideShowMenus


function hideShowMenus(){
    ulTag.classList.toggle('show')
    ulTag.style.transition = '.3s'
    
    links.classList.toggle('show')
    links.style.transition = '.5s'
}