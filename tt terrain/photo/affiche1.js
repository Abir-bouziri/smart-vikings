 const joueurs=[
    {
        "idrobots": 3,
        "robotname": "timoo",
        "robotuser": "nacer",
        "etablisement": "ensit",
        "homologation": 50
    },
    {
        "idrobots": 4,
        "robotname": "sdig",
        "robotuser": "abir",
        "etablisement": "sup",
        "homologation": 50
    },
    {
        "idrobots": 5,
        "robotname": "sandouk",
        "robotuser": "hamza",
        "etablisement": "sup",
        "homologation": 50
    },
    {
        "idrobots": 6,
        "robotname": "sandouk",
        "robotuser": "hamza",
        "etablisement": "sup",
        "homologation": 50
    },
    {
        "idrobots": 7,
        "robotname": "linda",
        "robotuser": "loulou",
        "etablisement": "isset",
        "homologation": 1500
    },
    {
        "idrobots": 8,
        "robotname": "siwar",
        "robotuser": "arme",
        "etablisement": "istic",
        "homologation": 1847654
    },
    {
        "idrobots": 9,
        "robotname": "ahmed",
        "robotuser": "proo",
        "etablisement": "istic",
        "homologation": 147
    },
    {
        "idrobots": 10,
        "robotname": "nacer",
        "robotuser": "robnacer",
        "etablisement": "enicar",
        "homologation": 1555
    },
    {
        "idrobots": 11,
        "robotname": "chokri",
        "robotuser": "choo",
        "etablisement": "istic",
        "homologation": 14561
    },
    {
        "idrobots": 12,
        "robotname": "hama",
        "robotuser": "mohamed",
        "etablisement": "iset",
        "homologation": 266
    },
    {
        "idrobots": 13,
        "robotname": "lasmer",
        "robotuser": "chdoula",
        "etablisement": "fst",
        "homologation": 1545
    },
    {
        "idrobots": 14,
        "robotname": "beaugosse",
        "robotuser": "basma",
        "etablisement": "fms",
        "homologation": 15643
    },
    {
        "idrobots": 17,
        "robotname": "ayoub",
        "robotuser": "lazher",
        "etablisement": "istic",
        "homologation": 50
    },
    {
        "idrobots": 18,
        "robotname": "18",
        "robotuser": "Alaa",
        "etablisement": "Istic",
        "homologation": 125
    },
    {
        "idrobots": 19,
        "robotname": "ahmed",
        "robotuser": "azizi",
        "etablisement": "isste",
        "homologation": 4545
    },
    {
        "idrobots": 20,
        "robotname": "basma",
        "robotuser": "alaa",
        "etablisement": "ensiin",
        "homologation": 548
    }
]

const joueursParPage = 4;
let pageActuelle = 1;

const tbodyJoueurs = document.getElementById("tbody-joueurs");
const pagination = document.getElementById("pagination");

function afficherJoueurs(page) {
  tbodyJoueurs.innerHTML = '';

  const debut = (page - 1) * joueursParPage;
  const fin = debut + joueursParPage;
  const joueursPage = joueurs.slice(debut, fin);
  
  let numero = debut + 1; // Numéro du premier joueur sur la page

  joueursPage.forEach(joueur => {
    const tr = document.createElement('tr');
    tr.id = `row_${joueur.idrobots}`; 
    tr.innerHTML = `
      <td >${joueur.idrobots}</td>
      <td><img src="./club.png" alt="Photo joueur ${joueur.numero}" class="rounded-circle" style="width: 40px; height: 40px;"></td>
      <td>${joueur.robotname}</td>
      <td>${joueur.robotuser}</td>
      <td>${joueur.etablisement}</td>
    `;

    tr.classList.add(`l${joueur.idrobots}`);
    tbodyJoueurs.appendChild(tr);
    
// Create a style element
const animationStyle = document.createElement('style');

// Define the animation dynamically
/*animationStyle.textContent = `
    @keyframes zoomIn {
      0% {
        transform: scale(0);
      }
      50% {
        transform: scale(1.75, 1.75);
      }
      100% {
        transform: scale(1, 1);
      }
    }

    /* Apply animation to the element */
   /* #row_${joueur.idrobots} {
        animation: zoomIn ${joueur.idrobots+1}s ease-in-out ; /* Play the animation indefinitely */
    /*    animation-delay: ${joueur.idrobots+1};
    }
`;*/

// Append the style element to the document head
document.head.appendChild(animationStyle);

  });
}

function afficherPagination() {
  pagination.innerHTML = '';
  const nombrePages = Math.ceil(joueurs.length / joueursParPage);
  for (let i = 1; i <= nombrePages; i++) {
    const btnPage = document.createElement('button');
    btnPage.innerText = "session "+ i;
    btnPage.addEventListener('click', () => {
      pageActuelle = i;
      afficherJoueurs(pageActuelle);
    });
    pagination.appendChild(btnPage);
  }
}

afficherJoueurs(pageActuelle);
afficherPagination();
function moveFirstRowToEnd() {
  const firstRow = tbodyJoueurs.firstElementChild;
  firstRow.style.transition = "transform 1s ease-in-out"; //  animation
  firstRow.style.transform = "translateY(1000%)"; 
  setTimeout(() => {
      tbodyJoueurs.appendChild(firstRow); // Move the row to the end after animation
      firstRow.style.transition = ""; // Reset transition
      firstRow.style.transform = ""; // Reset transform
  }, 1500); // Adjust the delay 
  
   // Highlight 
const timeCell = firstRow.querySelector('td:last-child');
timeCell.style.backgroundColor = 'lightgreen'; 
setTimeout(() => {
  timeCell.style.backgroundColor = ''; 
}, 1000); // Adjust the delay based on the animation duration
}


document.getElementById("dark-btn").innerText = ">>>";
document.getElementById("dark-btn").addEventListener("click", function() {
  moveFirstRowToEnd();
});


console.log("abir");
