window.onload = function(){

	document.getElementById("form-registro").onsubmit = function(element){
		element.preventDefault();
	}

	function registro(nombre, apellido, email, password){

		this.nombre = nombre;
		this.apellido = apellido;
		this.email = email;
		this.password = password;
	}

	var arrayUsuarios = [];

	document.getElementById("registrate").addEventListener("click", function(){

		var nombre = document.getElementById("nombre").value
		var apellido = document.getElementById("apellido").value
		var email = document.getElementById("email").value
		var password = document.getElementById("password").value		

		if(nombre.length !=0 && apellido.length !=0 && email.length !=0 && password.length !=0){

			if(!/([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})/gi.test(email)){

				var alertaEmail = document.getElementById("alerta-email");
				alertaEmail.innerText = "Ingresa un email válido"

			}else if(password.length < 6 || password.length > 20){

				var alertaPassword = document.getElementById("alerta-password");
				alertaPassword.innerText = "La contraseña debe tener entre 6 y 20 caracteres"

			}else{

				var alertaEmail = document.getElementById("alerta-email");
				var alertaPassword = document.getElementById("alerta-password");
				alertaEmail.innerText = "";
				alertaPassword.innerText = "";

				localStorage.setItem("registroNuevo",JSON.stringify(new registro(nombre,apellido,email,password)));
				document.getElementById("form-registro").reset()
				window.location = "inicio.html";

			}
	
		}else{

			var alerta = document.getElementById("alerta-todos");
			alerta.innerText = "Todos los campos son obligatorios"
		}

	});

	var nombre = document.getElementById("nombre");
	var apellido = document.getElementById("apellido");

	var validarLetras = function(element){

		var codigo = element.keyCode;
		if((codigo >= 97 && codigo <= 122) || (codigo >= 65 && codigo <= 90)|| codigo == 39 || codigo == 32){

			this.nextElementSibling.nextElementSibling.nextElementSibling.innerText = "";
			return true; 

		}else{

			this.nextElementSibling.nextElementSibling.nextElementSibling.innerText = "Este campo solo permite letras"
			return false;
		}
	}

	nombre.onkeypress 	= validarLetras;
	apellido.onkeypress = validarLetras;

}