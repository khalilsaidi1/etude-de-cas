// // Partie 1
// function validerFormulaire() {
   
//     var title = document.getElementById("title").value;
//     var destination = document.getElementById("destination").value;
//     var departureDate = document.getElementById("departure_date").value;
//     var returnDate = document.getElementById("return_date").value;
//     var price = document.getElementById("price").value;

    
//     if (title.length < 3) {
//         alert("The title must contain at least 3 characters.");
       
//     }

   
//     var destinationPattern = /^[A-Za-z\s]{3,}$/;
//     if (!destinationPattern.test(destination)) {
//         alert("The destination must contain only letters and spaces, and at least 3 characters.");
        
//     }

    
//     if (new Date(returnDate) <= new Date(departureDate)) {
//         alert("The return date must be later than the departure date.");
    
//     }

   
//     if (price <= 0 || isNaN(price)) {
//         alert("The price must be a positive number.");
        
//     }

    
  
// } 

// Partie 2


document.getElementById("addTravelOfferForm").addEventListener("submit", function(event) {
    
    //event.preventDefault();
    
  
    var title = document.getElementById("title").value;
    var destination = document.getElementById("destination").value;
    var departureDate = document.getElementById("departure_date").value;
    var returnDate = document.getElementById("return_date").value;
    var price = document.getElementById("price").value;
    
    var isValid = true;

    // Fonction pour afficher les messages d'erreur ou de succès
    function displayMessage(id, message, isError) {
        var element = document.getElementById(id + "_error");
        element.style.color = isError ? "red" : "green";
        element.innerText = message;
    }

    // Vérification du titre
    if (title.length < 3) {
        displayMessage("title", "The title must contain at least 3 characters.", true);
        isValid = false;
    } else {
        displayMessage("title", "Correct", false);
    }

    // Vérification de la destination
    var destinationPattern = /^[A-Za-z\s]{3,}$/;
    if (!destinationPattern.test(destination)) {
        displayMessage("destination", "The destination must contain only letters and at least 3 characters.", true);
        isValid = false;
    } else {
        displayMessage("destination", "Correct", false);
    }

    // Vérification des dates
    if (new Date(departureDate) == "Invalid Date" || new Date(returnDate) == "Invalid Date") {
        displayMessage("departure_date", "Please select valid dates.", true);
        displayMessage("return_date", "Please select valid dates.", true);
        isValid = false;
    } else if (new Date(returnDate) <= new Date(departureDate)) {
        displayMessage("return_date", "The return date must be later than the departure date.", true);
        isValid = false;
    } else {
        displayMessage("departure_date", "Correct", false);
        displayMessage("return_date", "Correct", false);
    }

    // Vérification du prix
    if (price <= 0 || isNaN(price)) {
        displayMessage("price", "The price must be a positive number.", true);
        isValid = false;
    } else {
        displayMessage("price", "Correct", false);
    }
    if (!isValid) {
        event.preventDefault();  // Empêche l'envoi du formulaire s'il y a des erreurs
    } else {
        // Le formulaire est valide, laisser le formulaire être envoyé
        alert("Form is valid, submitting...");
    }
  
});

// Partie 3

// document.addEventListener('DOMContentLoaded', function() {
    
//     var titleField = document.getElementById('title');
//     var destinationField = document.getElementById('destination');
   
//     titleField.addEventListener('keyup', validateTitle);
//     destinationField.addEventListener('keyup', validateDestination);
   

//     function validateTitle() {
//         var title = titleField.value;
//         var titleError = document.getElementById('title_error');

//         if (title.length >= 3) {
//             titleError.style.color = "green";
//             titleError.innerHTML = "Correct";
//         } else {
//             titleError.style.color = "red";
//             titleError.innerHTML = "Title must be at least 3 characters long";
//         }
//     }

//     function validateDestination() {
//         var destination = destinationField.value;
//         var destinationError = document.getElementById('destination_error');
//         var regex = /^[A-Za-z\s]+$/;

//         if (destination.length >= 3 && regex.test(destination)) {
//             destinationError.style.color = "green";
//             destinationError.innerHTML = "Correct";
//         } else {
//             destinationError.style.color = "red";
//             destinationError.innerHTML = "Destination must be at least 3 characters long and contain only letters and spaces";
//         }
//     }

   
// });
