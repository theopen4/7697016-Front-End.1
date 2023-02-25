//get the pieces from the json file 
const reponse =  await fetch('pieces-autos.json');
const pieces =  await reponse.json();
const article = pieces[0];

for(let i = 0; i < pieces.length; i++) {
    //recovery of  the dom  element  that will hosts the files
    const sectionFiches = document.querySelector('.fiches')
    //creation of the tag dedicated to an automative part
    const pieceElement = document.createElement('article');
    // we create the img element
    const imageElement = document.createElement('img');
    // we access the index i of the part list to configure the source of the image
    imageElement.src = `${pieces[i].image}  `
    // dido for the name, price and categorie
    const nomElement = document.createElement('h2');
    nomElement.innerText = pieces[i].nom;
    const prixElement = document.createElement('p');
    prixElement.innerText = `${pieces[i].prix} (${pieces[i].prix < 35 ? "$" : "$$"}) `
    const categorieElement = document.createElement('p');
    categorieElement.innerText = pieces[i].categorie ?? "aucune categorie";
    const descriptionElement = document.createElement('p');
    descriptionElement.innerText = pieces[i].description ?? "pas de description";
    const disponibilityElement = document.createElement('p');
    disponibilityElement.innerText = `${pieces[i].disponible ? "En stock " : "en rupture de stock"}`;
    sectionFiches.appendChild(pieceElement); 
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement); 
    pieceElement.appendChild(prixElement);  
    pieceElement.appendChild(categorieElement); 
    pieceElement.appendChild(descriptionElement); 
    pieceElement.appendChild(disponibilityElement);


}

const bouttonTrier = document.querySelector('.btn-trier');
bouttonTrier.addEventListener('click', function(){
    const piecesOrdonnees = Array.from(pieces) 
    pieces.sort(function(a, b){
    return b.prix - a.prix;
    })
    console.log(pieces)
})

const boutonFiltrer = document.querySelector('.btn-filtrer'); 
boutonFiltrer.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix <= 35;
    });
   console.log(piecesFiltrees)
});

const bouttonTrierDecroissant = document.querySelector('.btn-trier-decroisant')
bouttonTrierDecroissant.addEventListener('click', function(){
    const piecesOrdonnees = Array.from(pieces);
    pieces.sort(function(a, b){
        return a.prix - b.prix;

    })
    console.log(pieces);
    
})
const boutonNoDescription = document.querySelector(".btn-filterdescription");
boutonNoDescription.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter((piece) => piece.description);
   console.log(piecesFiltrees)
});
const noms = pieces.map(piece => piece.nom);
// creation of pieces list no unaffordable
for(let i = pieces.length - 1; i >= 0; i--){
    if(pieces[i].prix > 35){
        noms.splice(i, 1);
    }
}
console.log(noms);
// remove unaffordable prices from the list

// creation of the list
const abordablesElements = createElement('ul')
// add each name to the list





