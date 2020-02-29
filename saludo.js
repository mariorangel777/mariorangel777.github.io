var hoy= new Date();
var hora= hoy.getHours();
var saludo;

if (hora > 19)
{
    saludo='Hola, Buenas noches!';
}

else if (hora > 12)
{
    saludo='Que tal, buenas tardes!';
}
else if (hora > 0)
{
    saludo='Hey, Buenos días!';
}
else
{
    saludo='Bienvenido'
}

document.write(  '<span class="navbar-text">' + saludo +'</span>');
//document.write(saludo)