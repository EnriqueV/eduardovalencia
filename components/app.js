Lungo.init({
            name: 'Ejemplo Firefox OS App'
        });

Lungo.ready(function(){

Lungo.Notification.success(

"El salvador Travel",
"¡Guia turistica de El Salvador descubre los lugares mas Hermosos aqui!",
"flag",
 3
);
setTimeout(function(){
Lungo.Notification.hide();

}, 5000);


});


