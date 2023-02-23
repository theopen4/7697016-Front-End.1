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


console.log(pieces)




