const listeJoueurs = document.getElementById("liste-joueurs");
  
  // Fonction pour afficher un joueur
  function afficherJoueur(joueur) {
    const elementJoueur = document.createElement("div");
    elementJoueur.classList.add("joueur");
  
    const elementNom = document.createElement("h2");
    elementNom.classList.add("nom");
    elementNom.textContent = joueur.robotname;
  
    const elementPoints = document.createElement("p");
    elementPoints.classList.add("points");
    elementPoints.textContent = joueur.Score + " points";

    const elementtime = document.createElement("p");
    elementtime.classList.add("time");
    elementtime.textContent = joueur.end  ;
  
    elementJoueur.appendChild(elementNom);
    elementJoueur.appendChild(elementPoints);
    elementJoueur.appendChild(elementtime);
    listeJoueurs.appendChild(elementJoueur);
  }
  
  // Affichage des joueurs
  function compareTimes(time1, time2) {
    // Split time strings into hours, minutes, and seconds
    const [hours1, minutes1, seconds1] = time1.split(":").map(Number);
    const [hours2, minutes2, seconds2] = time2.split(":").map(Number);
    
    // Compare hours
    if (hours1 !== hours2) {
      return hours1 - hours2;
    }
    
    // Compare minutes
    if (minutes1 !== minutes2) {
      return minutes1 - minutes2;
    }
    
    // Compare seconds
    return seconds1 - seconds2;
  }
  function scorefinal(time1,time2,a,b)
  {
    if (a == b)
    { 
      return compareTimes(time1,time2);
    }
    return b - a;
  }
  //joueurs.forEach(afficherJoueur);
  function corr() {
    try {
        joueurs.forEach(afficherJoueur);
        // Animation de la liste
  function animerListe() {
    // Tri des joueurs par points
  
   //joueurs.sort((a, b) => b.Score - a.Score);
   //joueurs.sort((a,b)=> compareTimes(b.end,a.end));
   joueurs.sort((a,b)=>
       scorefinal(a.end,b.end,a.Score,b.Score)
   );
  


    // Mise à jour du DOM
    listeJoueurs.innerHTML = "";
    joueurs.forEach(afficherJoueur);


  
    // Définir le joueur avec le plus de points en haut
    const elementJoueurHaut = document.querySelector(".joueur:first-child");
    elementJoueurHaut.classList.add("haut");
    const image = document.createElement("img");
    image.src = "https://e7.pngegg.com/pngimages/973/360/png-clipart-gold-medal-gold-medal-medal-gold-thumbnail.png";
    image.classList.add("haut-image");
    elementJoueurHaut.appendChild(image);
    const textNode = document.createTextNode(" "+"First Place");
    // Append the text node to the target element
    elementJoueurHaut.appendChild(textNode);
    

    // Définir le joueur avec second de points en haut
    const elementJoueursec = document.querySelector(".joueur:nth-child(2)");
    elementJoueursec.classList.add("sec");
    const imagesec = document.createElement("img");
    imagesec.src = "https://c0.klipartz.com/pngpicture/465/115/gratis-png-medalla-de-plata-medalla-de-oro-medalla.png";
    imagesec.classList.add("haut-image");
    elementJoueursec.appendChild(imagesec);
    const textNode2 = document.createTextNode(" "+"Second Place");
    // Append the text node to the target element
    elementJoueursec.appendChild(textNode2);


    // Définir le joueur avec third  de points en haut
    const elementJoueurthird = document.querySelector(".joueur:nth-child(3)");
    elementJoueurthird.classList.add("third");
    const imagethird = document.createElement("img");
    imagethird.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf9KuY6VaqKF_H1DLui7ufCzSY-naoNXwjy_kREH15vwH02ne_dTrAXs_ZhATgydNSK0A&usqp=CAU";
    imagethird.classList.add("haut-image");
    elementJoueurthird.appendChild(imagethird);
    const textNode3 = document.createTextNode(" "+"Third Place");
    // Append the text node to the target element
    elementJoueurthird.appendChild(textNode3);


    for (let i = 7; i <= 40; i++) {
      const elementJoueur = document.querySelector(`.joueur:nth-child(${i})`);
      
      if (elementJoueur) { // Check if the element exists
        elementJoueur.classList.add("a");
        const textNodek = document.createTextNode(` ${i} Place`); // Dynamic text based on index
        elementJoueur.appendChild(textNodek);
        elementJoueur.style.display = "none";
      }
    }

    // Définir un délai pour la prochaine animation
    setTimeout(animerListe, 3000);
  }
  
  // Démarrage de l'animation
  animerListe();

 /* function refreshPage() {
    window.location.reload(); // Reload the current page
}*/
function refreshPage() {
    try {
        // Attempt to reload the page
        window.location.reload();
    } catch (error) {
        // If an error occurs (e.g., due to restricted permissions), log it and reload the page
        console.error('Error reloading page:', error);
        window.location.reload();
    }
}
// Refresh the page every minute (60,000 milliseconds)
setInterval(refreshPage,6000);
    } catch (error) {
        console.error('An error occurred while iterating over joueurs:', error);
        // Handle the error here
        window.location.reload();
    }}
    corr();
  