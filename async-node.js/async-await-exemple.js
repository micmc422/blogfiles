import { promises as fs } from 'fs';

async function lireEtCopierFichier() {
    try {
        const data = await fs.readFile('./mon-fichier.txt', 'utf8');
        console.log("Contenu du fichier :", data);
        
        await fs.writeFile('./copie.txt', data);
        console.log("Le fichier a été copié avec succès ! 🎉");
    } catch (error) {
        console.error("Une erreur est survenue durant le processus :", error);
    }
}

lireEtCopierFichier();
