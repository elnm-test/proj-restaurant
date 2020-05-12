export default {
     scrollFunc : (function(){
        window.addEventListener('scroll',function(){
            var elHeader = this.document.querySelector('header');
            elHeader.classList.toggle('sticky',window.scrollY > 0)
        })
    })(),
}