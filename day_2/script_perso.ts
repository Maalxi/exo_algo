// Exercice 1
// Faites l'import nécessaire pour exploiter les données du fichier data.json et afficher son contenu dans la console

import data from "./data.json";
console.log(data);

// Exercice 2
// Créer deux constantes, l'une contient les téléphones de la liste, l'autre les consoles
// Afficher le contenu des deux constantes dans la console

const Console = data.consoles;
const Telephone = data.telephones;

console.log(Console);
console.log(Telephone);

// Exercice 3
// Fusionner les tableaux "consoles" et "téléphones" dans une constantes "products" (how to merge array Javascript > Google)
// Afficher le contenu de cette constante

var products = [...Console, ...Telephone];
console.log(products);

// Exercice 4
// Extraire toutes les marques présentent dans le tableau "products" dans un nouveau tableau

const fabricants: string[] = products
  .filter((product) => product.hasOwnProperty("fabricant"))
  .map((product) => product.fabricant);

  console.log(fabricants);
  

// Exercice 5.1
// Extraire les produits des marques Samsung et Sony du tableau "products" dans un nouveau tableau

const samsungSonyProducts = products.filter((product) => product.fabricant === 'Samsung' || product.fabricant === 'Sony');

console.log(samsungSonyProducts);

// Exercice 5.2
// Créer une fonction recevant un paramètre "brand" qui est une string, cette fonction exploite le tableau "products"
// et retourne un tableau des produits de la marque (brand) présent dans "products"

function getProductsByBrand(brand: string): any[] {
  const filteredProducts = products.reduce((accumulator: any[], currentValue: any) => {
    if (currentValue.fabricant === brand) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
  return filteredProducts;
}

const samsungProducts = getProductsByBrand('Sony');
console.log(samsungProducts);


// Exercice 6.1
// Faire le total des consoles vendus par Nintendo
// Faire le total des téléphones vendus par Apple

// Le total des consoles vendues par Nintendo
let totalNintendoConsoles = 0;
data.consoles.forEach(console => {
    if (console.fabricant === "Nintendo") {
        totalNintendoConsoles += console.ventes_totales_estimees;
    }
});
console.log(`Total des consoles vendues par Nintendo : ${totalNintendoConsoles}`);

// Le total des téléphones vendus par Apple
let totalApplePhones = 0;
data.telephones.forEach(phone => {
    if (phone.fabricant === "Apple") {
        totalApplePhones += phone.ventes_annuelles_estimees;
    }
});
console.log(`Total des téléphones vendus par Apple : ${totalApplePhones}`);


// Exercice 6.2
// Créer une fonction recevant un paramètre "brand" qui est une string, cette fonction exploite le tableau "products"
// et retourne le total des ventes des produits de la marque (brand) présent dans "products"

function getTotalSalesByBrand(brand) {
  let totalSales = 0;
  
  for (let product of products) {
    if (product.fabricant === brand) {
      if ('ventes_annuelles_estimees' in product) {
        totalSales += product.ventes_annuelles_estimees;
      } else {
        totalSales += product.ventes_totales_estimees;
      }
    }
  }
  
  return totalSales;
}

console.log(getTotalSalesByBrand('Sony'));
