import { promises as fs } from 'fs';

fs.readFile('./mon-fichier.txt', 'utf8')
    .then(data => {
        console.log("Contenu du fichier :", data);
        return fs.writeFile('./copie.txt', data); // On retourne une nouvelle promesse
    })
    .then(() => {
        console.log("Le fichier a été copié avec succès ! 🎉");
    })
    .catch(error => {
        console.error("Une erreur est survenue durant le processus :", error);
    });
