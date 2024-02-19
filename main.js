//variables de autenticacion del formulario
var seña= "abc123";
var use= "admin0";
//obtencion de los datos desde el fromulario html
const username = document.getElementById('username')
const password = document.getElementById('password')
const button = document.getElementById('button')
//creacion del evento para el boton 
button.addEventListener('click', (e) => {
    e.preventDefault()
    const data = {
        username: username.value,
        password: password.value
    }
    //comando if, para autenticar los datos obtenidos
        if (data.password == seña && data.username ==use){
        alert ('Acceso autorizado');
        window.location = "principal.html"; //nos da acceso a la pagina que hemos creado
    }
    else{
        alert("nombre o usurio incorrecto") //en caso de no tener autenticacion correcta, nos arroja otra alerta
    };

    console.log(data)
})