
function accesForum() {
	document.write("<h1>Bienvenue sur le forum !! Page en construction !!!</h1>");
	
	var urlActuel = window.location;
	alert("URL actuelle est : " + urlActuel.toString() );
	
	alert("Retournons à la page d'accueil");
		
	window.location = "https://catherine57.github.io/SiteBlog/";
};
/*******************
     Contact
********************/

	var monFormContact = document.getElementById('monFormContact');
		
	monFormContact.addEventListener('submit', 
		function(evt){
			
			alert('la validité de votre envoi va être testée ! ');

			var stopSumit = evt.preventDefault();

		 	var inputNom = document.getElementById("nom");
		 	console.log(inputNom.value);

		 	var monRegex = /^[a-zA-Z\s]+$/;					
		 	var test = monRegex.test(inputNom.value);
		 	console.log("test regex1 : " + test);

			// Message si nom contient un chiffre
		 	if( monRegex.test(inputNom.value) == false ){
				var erreurNom = document.getElementById("messageFormContact")
				erreurNom.innerHTML = "Votre nom ne peut pas contenir de chiffre";
				console.log(erreurNom);
				erreurNom.style.color = 'red';
				inputNom.value = null;
			} else {

				var succes = document.getElementById("messageFormContact");
				succes.innerHTML = "Votre message est valide ! Il est transmis au back-end";
				console.log(succes);
				erreurNom.style.color = 'green';
			}
			window.location = "https://catherine57.github.io/SiteBlog/#contact";
		}
	);


/*******************
     Newsletter
********************/

var monFormNew = document.getElementById("monFormNew");
var email = document.getElementById("subMail");


monFormNew.addEventListener('submit',
	function(evt){
		// Message d'erreur si vide
		if (email.value.trim() == "") {
			var erreur = document.getElementById("message");
			erreur.innerHTML= "Veuillez saisir un email";
			erreur.style.color = 'pink';
			evt.preventDefault(); //empêche le submit = transmission 
			
		} else {
			var succes = document.getElementById("message");
			succes.innerHTML= "Votre email a bien été transmise au back-end";
			succes.style.color = 'green';
			succes.style.background = 'pink';
			evt.preventDefault();
		}
		window.location = "https://catherine57.github.io/SiteBlog/#blog";
	}
);  