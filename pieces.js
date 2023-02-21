//get the pieces from the json file 
const reponse =  await fetch('pieces-autos.json');
const pieces =  await reponse.json();
const article = pieces[0];
const imageElement =  document.createElement('img');
imageElement.src = article.image;
const nomElement = document.createElement('h2');
nomElement.innerText = article.nom;
const prixElement = document.createElement('p');
prixElement.innerText = `prix: ${article.prix} $ (${article.prix < 35 ? "$" : "$$"})`;
const categorieElement = document.createElement('p');
categorieElement.innerText = article.categorie ?? "aucune categorie";
const descriptionElement = document.createElement('p');
descriptionElement.innerText = article.description ?? "pas de description pour le moment ";
const disponibilityElement = document.createElement('p');
disponibilityElement.innerText = `${article.disponible ? "En stock " : "en rupture de stock"}`;

const sectionFiches = document.querySelector('.fiches')
sectionFiches.appendChild(imageElement); 
sectionFiches.appendChild(nomElement); 
sectionFiches.appendChild(prixElement);  
sectionFiches.appendChild(categorieElement); 
sectionFiches.appendChild(descriptionElement); 
sectionFiches.appendChild(disponibilityElement); 




