import { readFile } from 'fs';

readFile('./mon-fichier.txt', 'utf8', (error, data) => {
    if (error) {
        console.error("Oups, une erreur est survenue :", error);
        return;
    }
    console.log(data);
});
