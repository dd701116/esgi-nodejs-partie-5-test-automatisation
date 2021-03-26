const assert = require('assert')

// La fonction somme() retourne la somme des nombres passés en paramètre.
// Tout paramètre manquant aura 0 comme valeur par défaut.
// Si un des paramètre n'est pas de type `number`, la fonction lèvera une
// exception avec le message d'erreur "paramètre invalide".
function somme(nombre1 = 0, nombre2 = 0) {
  // (implémentation de la fonction: non nécessaire pour cet exercice)
  if (typeof nombre1!=="number" || typeof nombre2!=="number") {
    throw new Error("paramètre invalide");
  }
  return nombre1+nombre2;
}


describe("somme de deux nombre", () => {
  it(`Devrait retourner 6, dans le cas ou les deux paramettre sont fournis `, async () => {
    const resultat = somme(3,3);
    assert.strictEqual(resultat,6);
  });
 it(`Devrait retourner 3, dans le cas ou un seul paramettre est fourni`, async () => {
    const resultat = somme(3);
    assert.strictEqual(resultat,3);
  });
 it(`Devrait retourner paramètre invalide, dans le cas ou un des paramettres n'est pas un nombre`, async () => {
    assert.throws(() => {
      somme(3,"je ne suis pas un nombre");
    }, new Error("paramètre invalide"));
  })
});