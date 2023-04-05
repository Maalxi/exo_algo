// Exercice 1
// Faites l'import nécessaire pour exploiter les données du fichier data.json et afficher son contenu dans la console
import data from './data.json'

interface Phone {
    telephone: string,
    fabricant: string,
    ventes_annuelles_estimees: number
}

interface Console {
    console: string,
    fabricant: string,
    ventes_totales_estimees: number
}

// Exercice 2
// Créer deux constantes, l'une contient les téléphones de la liste, l'autre les consoles
// Afficher le contenu des deux constantes dans la console

const phones: Phone[] = data.telephones
const consoles: Console[] = data.consoles

// Exercice 3
// Fusionner les tableaux "consoles" et "téléphones" dans une constantes "products" (how to merge array Javascript > Google)
// Afficher le contenu de cette constante

const products = phones.concat(consoles)
// const products = [...phones, ...consoles]

// Exercice 4
// Extraire toutes les marques présentent dans le tableau "products" dans un nouveau tableau

const duplicatedBrands: string[] = []
const singleBrands: string[] = []

for (let i = 0; i < products.length; i++) {
    duplicatedBrands.push(products[i].fabricant)

    if (!singleBrands.includes(products[i].fabricant)) {
        singleBrands.push(products[i].fabricant)
    }
}

// Exercice 5.1
// Extraire les produits des marques Samsung et Sony du tableau "products" dans un nouveau tableau

const specificBrands: (Phone | Console)[] = []

// Version #0
for (let i = 0; i < products.length; i++) {
    if (products[i].fabricant === "Samsung" || products[i].fabricant === "Sony") {
        specificBrands.push(products[i])
    }
}

// Version #1 simplifié
const test1 = products.filter(product => product.fabricant === "Sony" || product.fabricant === "Samsung")

// Version #1 détaillé
const test2 = products.filter((product) => {
    if (product.fabricant === "Sony" || product.fabricant === "Samsung") {
        return true
    } else {
        return false
    }
})

// Exercice 5.2
// Créer une fonction recevant un paramètre "brand" qui est une string, cette fonction exploite le tableau "products"
// et retourne un tableau des produits de la marque (brand) présent dans "products" 

function getProductByBrand(brand: string) {

    // Init le tableau vide
    const specificBrands: (Phone | Console)[] = []

    // Parcours le tableau de produits pour en extraire les produits de la marque recherchée
    for (let i = 0; i < products.length; i++) {
        if (products[i].fabricant === brand) {
            specificBrands.push(products[i])
        }
    }

    // Retourne le tableau contenant les produits de la marque recherchée
    return specificBrands
}

// Exercice 6.1
// Faire le total des consoles vendus par Nintendo
// Faire le total des téléphones vendus par Apple

function getSales(brand: string) {

    // Fait appel à la fonction pour extraire les produits d'un tableau de produits selon la marque
    const brandProducts = getProductByBrand(brand)

    // Init le nombre de vente
    let totalSales: number = 0

    // Parcours le tableau des produits de la marque pour agréger les ventes de chaque produit
    for (let i = 0; i < brandProducts.length; i++) {
        const productKeys = Object.keys(brandProducts[i])

        if (productKeys.includes('ventes_annuelles_estimees')) {
            totalSales += brandProducts[i].ventes_annuelles_estimees
        } else if (productKeys.includes('ventes_totales_estimees')) {
            totalSales += brandProducts[i].ventes_totales_estimees
        }
    }

    return `La marque ${brand} a vendu pour ${totalSales} unités`
}

const totalSalesForApple = getSales('Sony')
// console.log(getSales('Nintendo'))

// Exercice 6.2
// Créer une fonction recevant un paramètre "brand" qui est une string, cette fonction exploite le tableau "products"
// et retourne le total des ventes des produits de la marque (brand) présent dans "products"