document.getElementById('pagina-animacao').addEventListener('click', function(event){
event.preventDefault();

   const animationContainer = document.getElementById('animation-container');
   animationContainer.classList.add("show");

   setTimeout(() =>{
    window.location.href = this.href;
   }, 5000); // vou regular a duração da animação
})