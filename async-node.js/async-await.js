async function() {
  try {
    const resultat1 = await operation1(); // Attente...
    const resultat2 = await operation2(); // Attente...
    const resultat3 = await operation3(); // Attente...
    // C'est simple et linéaire !
  } catch (erreur) {
    // Gestion de n'importe quelle erreur
  }
}
