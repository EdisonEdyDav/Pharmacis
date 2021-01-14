document.querySelector('#boton').addEventListener('click',entrar)
function entrar(){
    var usuario = document.getElementById("usuario").value;
    var clave = document.getElementById("contrasena").value;
     if(usuario == 'admin' && clave == 'admin'){
        alert("Bienvenido administrador");
        window.location="estadoturno.html";
     }else{
            if(usuario == 'cabo' && clave == '1234'){
                 alert("Bienvenido Usuario");
                  window.location="servicio.html";
             }
        alert("Datos incorrectos");
     }
}
