function accesForum() {
	document.write("<h1>Bienvenue sur le forum !! Page en construction !!!</h1>");
	
	var urlActuel = window.location;
	alert("URL actuelle est : " + urlActuel.toString() );
	
	alert("Retournons à la page d'accueil");
		
	window.location = "https://catherine57.github.io/SiteBlog/";
};

function envoyer(){

	alert('la validité de votre envoi n\'a pas été testée ! ');
	alert("Message non transmis");
	window.location = "https://catherine57.github.io/SiteBlog/#contact";
};
