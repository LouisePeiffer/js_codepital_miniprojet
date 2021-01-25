// PATIENTS
class Patient {
    constructor (nom, maladie, argent, poche, etatSante) {
        this.nom = nom;
        this.maladie = maladie;
        this.argent = argent;
        this.poche = poche;
        this.etatSante = etatSante;
    }
    goTo (x,y) {
        console.log(`${x.nom} est allé à ${y.nom}`);
    };
    paye (x) {
        console.log(`${x.nom} a actuellement ${x.argent-docteur.cout}€`);
    };
    traitement (x) {
        if (x.maladie == malInd.malade) {
            console.log(`Le traitement de ${x.nom} coûte ${malInd.prix}€`);
        } else if (x.maladie == unsave.malade) {
            console.log(`Le traitement de ${x.nom} coûte ${unsave.prix}€`);
        } else if (x.maladie == err.malade) {
            console.log(`Le traitement de ${x.nom} coûte ${err.prix}€`);
        } else if (x.maladie == azmatique.malade) {
            console.log(`Le traitement de ${x.nom} coûte ${azmatique.prix}€`);
        } else if (x.maladie == syntaxError.malade) {
            console.log(`Le traitement de ${x.nom} coûte ${syntaxError.prix}€`); 
        } 
    };
    takeCare (x,y) {
        if (x.argent-docteur.cout < y.prix) {
            console.log(`${x.nom} n'a pas assez d'argent pour payer le traitement`);
        } else if (x.argent-docteur.cout >= y.prix) {
            console.log(`${x.nom} est soigné`);
        }
    };
}

let marcus = new Patient ("Marcus", "mal indenté", 100, "vide", "malade")
console.log(marcus);
let optimus = new Patient ("Optimus", "unsave", 200, "vide", "malade")
console.log(optimus);
let sangoku = new Patient ("Sangoku", "404", 80, "vide", "malade")
console.log(sangoku);
let darthVader = new Patient ("DarthVader", "azmatique", 110, "vide", "malade")
console.log(darthVader);
let semicolon = new Patient ("Semicolon", "syntaxError", 60, "vide", "malade")
console.log(semicolon);

// Traitement
class Mal {
    constructor(sol, malade, prix) {
        this.sol = sol;
        this.malade = malade;
        this.prix = prix;
    }
}
let malInd = new Mal ("ctrl+maj+f","mal indenté",60)
let unsave = new Mal ("saveOnFocusChange","unsave",100)
let err = new Mal ("CheckLinkRelation","404",35)
let azmatique = new Mal ("Ventoline", "azmatique",40)
let syntaxError = new Mal("f12+doc","syntaxError", 20)

let lesMaladies = [malInd,unsave,err,azmatique,syntaxError]

// DOCTEUR
let docteur = {
    nom : "Docteur",
    cout : 50,
    cabinet : [],
    diagnostique (x) {
        if (x.maladie == malInd.malade) {
            console.log(`Le traitement de ${x.nom} est ${malInd.sol}`);
        } else if (x.maladie == unsave.malade) {
            console.log(`Le traitement de ${x.nom} est ${unsave.sol}`);
        } else if (x.maladie == err.malade) {
            console.log(`Le traitement de ${x.nom} est ${err.sol}`);
        } else if (x.maladie == azmatique.malade) {
            console.log(`Le traitement de ${x.nom} est ${azmatique.sol}`);
        } else if (x.maladie == syntaxError.malade) {
            console.log(`Le traitement de ${x.nom} est ${syntaxError.sol}`);
        } 
    },
    patientIn (x) {
        console.log(`${x.nom} est entré au ${lieu.nom}`);
    },
    patientOut (x) {
        console.log(`${x.nom} a quitté le ${lieu.nom}`);
    },
}

// LIEUX
let lieu = {
    nom: "cabinet",
}
let salle = {
    nom: "salle d'attente",
    contenu : [],
}
let pharmacie = {
    nom: "pharmacie",
}

// Opérations 
salle.contenu.push(marcus,optimus,sangoku,darthVader,semicolon)
console.log(salle.contenu);
console.log(`Dans la ${salle.nom}, il y a ${salle.contenu.length} personnes`);

// Opérations PATIENTS
salle.contenu.forEach(el => {
    // setInterval(() => {
    //     console.log("miau");
    // }, 2000);
    docteur.patientIn(el)
    console.log(`La maladie de ${el.nom} est ${el.maladie}`);
    docteur.diagnostique(el)
    el.paye(el)
    docteur.patientOut(el)
    el.goTo(el,pharmacie)
    el.traitement(el)
    let x = 0
    el.takeCare(el,lesMaladies[x]);
    console.log("-----");
    x++
});





// // Opérations 
// console.log("--------");
// salle.contenu.splice(0,1)

// console.log(`Dans la ${salle.nom}, il y a ${salle.contenu.length} personnes`);

// // Opérations OPTIMUS
// docteur.patientIn(optimus)

// console.log(`La maladie de ${optimus.nom} est ${optimus.maladie}`);

// docteur.diagnostique(optimus)

// optimus.paye(optimus)

// docteur.patientOut(optimus)

// optimus.goTo(optimus,pharmacie)

// optimus.traitement(optimus)

// optimus.takeCare(optimus,unsave)


// // Opérations SANGOKU
// console.log("------");
// salle.contenu.splice(0,1)
// console.log(`Dans la ${salle.nom}, il y a ${salle.contenu.length} personnes`);

// docteur.patientIn(sangoku)

// console.log(`La maladie de ${sangoku.nom} est ${sangoku.maladie}`);

// docteur.diagnostique(sangoku)

// sangoku.paye(sangoku)

// docteur.patientOut(sangoku)

// sangoku.goTo(sangoku,pharmacie)

// sangoku.traitement(sangoku)

// sangoku.takeCare(sangoku,err)
