operation1(..., (err, data) => {
  // Niveau 1
  operation2(..., (err, data) => {
    // Niveau 2
    operation3(..., (err, data) => {
      // Niveau 3
      // Et ainsi de suite... nested hell
    });
  });
});
