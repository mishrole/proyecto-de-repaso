window.onload = function(){

	var nombre 		= document.getElementById("nombre-usuario");
	var apellido 	= document.getElementById("apellido-usuario");
	var email 		= document.getElementById("email-usuario");
	var password 	= document.getElementById("password-usuario")

	var usuariosStorage = JSON.parse(localStorage.getItem("registroNuevo"));

	nombre.innerText	= usuariosStorage.nombre;
	apellido.innerText	= usuariosStorage.apellido;
	email.innerText		= usuariosStorage.email;
	password.innerText	= usuariosStorage.password;
	

	function usuario(nombreUsuario, apellidoUsuario, emailUsuario, passwordUsuario) {

		this.nombre 	= nombreUsuario;
		this.apellido 	= apellidoUsuario;
		this.email 		= emailUsuario;
		this.password 	= passwordUsuario;

	}
}
