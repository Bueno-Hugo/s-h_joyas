const altura =  document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('fondo');

window.onscroll =  ()  =>  {
        const  anchoFondo  =  (window.pageYOffset  / altura)  * 600;
         if (anchoFondo <= 100)  {
            fondo.style.width  =  anchoFondo  + '%';
        }
        
} 
  /*Onscroll es un evento de javascript que se va a ejecutar cada vez que el usuario haga scroll */