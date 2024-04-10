
function etat() {
    var etat = document.getElementById('res');
    if (etat.textContent=='Approved') {
        etat.textContent = 'Disqualified';
        etat.style.animationName = 'burn';
    }
    else{
        etat.textContent = 'Approved';
        etat.style.animationName = 'burn1';
    }
    
    
  }
  function redirectTosOtherPage() {
    window.location.href = 'http://localhost:5000/challenge'; // Redirect to otherpage.html
  }
  const resElement = document.getElementById('res');
// Add a click event listener to the element
resElement.addEventListener('click', function() {
    // Your code to execute when the element is clicked
    redirectTosOtherPage();
});


 