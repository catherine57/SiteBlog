function accesForum() {
	document.write("<h1>Bienvenue sur le forum !! Page en construction !!!</h1>");
	
	var urlActuel = window.location;
	alert("URL actuelle est : " + urlActuel.toString() );
	
	alert("Retournons à la page d'accueil");
		
	window.location = "https://catherine57.github.io/SiteBlog/";
};

function envoyerMessage(){

	alert('la validité de votre envoi n\'a pas été testée ! ');

	window.location = "https://catherine57.github.io/SiteBlog/";

};

/* Newslettre*/
let monFormNew = document.getElementById("monFormNew");
let email = document.getElementById("subMail");


monFormNew.addEventListener('submit',
	function(evt){
		// Message d'erreur si vide
		if (email.value.trim() == "") {
			let erreur = document.getElementById("message");
			erreur.innerHTML= "Veuillez saisir un email";
			erreur.style.color = 'pink';
			evt.preventDefault(); //empêche le submit = transmission 
			
		} else {
			let succes = document.getElementById("message");
			succes.innerHTML= "Votre email a bien été transmise au back-end";
			succes.style.color = 'green';
			succes.style.background = 'pink';
			evt.preventDefault();
		}

	}
); 