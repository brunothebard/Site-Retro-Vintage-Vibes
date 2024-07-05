
    document.addEventListener('DOMContentLoaded', function() {
 
        const swordSound = document.getElementById('sword-sound');

        document.getElementById('pagina-animacao').addEventListener('click', function(event) {
            event.preventDefault();  
            swordSound.play(); 
            
           
            
            const animationContainer = document.getElementById('animation-container');
            animationContainer.classList.add('show');
            
            setTimeout(() => {
                window.location.href = 'boardgames.html';  // 
            }, 4000); 
        });
    });

