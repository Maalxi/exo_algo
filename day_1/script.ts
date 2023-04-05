// Cet import permet d'exploiter le fichier JSON dans notre fichier Javascript / Typescript
import data from './data.json'

// Exercice #1
// Affichez "data" dans la console pour voir à quoi ressemble les données que vous aller manipuler

console.log(data.villes);


// ------------------------------------------------------------------------------------------------------------ //


// Exercice #2
// À l'aide d'une boucle parcourez le tableau et faite le total d'habitants de ces 10 grandes villes

let total_habitants = 0

for (let i = 0; i < data.villes.length; i++) {
  const populationString: string = data.villes[i].population;
  const populationNumber: number = parseFloat(populationString.replace(' millions', '').replace(',', '.'));
  total_habitants += populationNumber * 1000000;
}


console.log(`${total_habitants.toLocaleString()} Millions`);



// Exercice #2.1
// Créer une fonction recevant le tableau des villes en paramètre, c'est la fonction qui se chargera de faire la boucle et le total d'habitant

function calculerPopulationTotale (){

  let total_habitants = 0

  for (let i = 0; i < data.villes.length; i++) {
    const populationString: string = data.villes[i].population;
    const populationNumber: number = parseFloat(populationString.replace(' millions', '').replace(',', '.'));
    total_habitants += populationNumber * 1000000;
  }
  
  
  console.log(`${total_habitants.toLocaleString()} Millions`);
}

calculerPopulationTotale()


// ------------------------------------------------------------------------------------------------------------ //

// Exercice #3
// À l'aide d'une boucle parcourez le tableau, pour chaque item du tableau afficher dans la console une phrase comme :
// "La ville <insérer nom de la ville> est la <insérer rang de la ville> plus grande ville du monde, avec <insérer nombre habitant> habitants"

function afficherInfosVilles() {
  for (let i = 0; i < data.villes.length; i++) {
    const ville = data.villes[i];
    console.log(`La ville ${ville.ville} est la ${i + 1}ème plus grande ville du monde, avec ${ville.population} habitants`);
  }
}

// afficherInfosVilles();


// Exercice #3.1
// Au lieu de faire le console.log() dans votre boucle, créer une fonction qui recevra une ville en paramètre et qui fera le console.log()

for (let i = 0; i < data.villes.length; i++) {
  const ville = data.villes[i];
  console.log(afficherInfosVille({
    ville: ville.ville,
    population: ville.population,
    rang: i + 1
  }));
}

function afficherInfosVille(ville) {
  let text = `La ville ${ville.ville} est la ${ville.rang}ème plus grande ville du monde, avec ${ville.population} habitants`;
  return text
}

// ------------------------------------------------------------------------------------------------------------ //

// Exercice #4
// À l'aide d'une boucle parcourez le tableau de villes et construire un tableau avec les villes de plus de 20 millions d'habitants.

function afficherPlus20() {
  for (let i = 0; i < data.villes.length; i++) {
    const ville = data.villes[i];
    const population = parseFloat(ville.population);
    if (population < 20) {
      console.log(`La ville ${ville.ville} est la ${i + 1}ème plus grande ville du monde, avec ${ville.population} habitants`);
    }
  }
}

 afficherPlus20()

// ------------------------------------------------------------------------------------------------------------ //

// Exercice #5
// À l'aide d'une boucle parcourez le tableau et construire un tableau des villes, ordonné par leur nombre d'habitant

data.villes.sort((a, b) => {
  return parseFloat(b.population) - parseInt(a.population);
});

const villesOrdonnees: string[] = [];
for (let i = 0; i < data.villes.length; i++) {
  const ville = data.villes[i];
  villesOrdonnees.push(ville.ville);
}

console.log(villesOrdonnees);



// ------------------------------------------------------------------------------------------------------------ //

// Exercice #6
// À l'aide d'une boucle parcourez votre tableau des villes ordonnées et créer en une liste affichable dans le HTML (voir createElement())


const listElement: HTMLUListElement = document.createElement("ul");
document.body.appendChild(listElement);

villesOrdonnees.forEach((ville) => {
  const villeElement: HTMLLIElement = document.createElement("li");
  villeElement.textContent = ville;
  listElement.appendChild(villeElement);
});
