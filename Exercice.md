# esgi-nodejs-partie-5-test-automatisation
Cours Node.js - Partie 5 - Validation, tests automatisés et intégration continue
Sujet => https://adrienjoly.com/cours-nodejs/05-valid/

### Q1 : Des tests pour vérifier la conformité

- Reconnaissez-vous ces tests ?
    - Oui, ce sont les tests executé par l'exorciseur

- Déterminez le type de chaque test (unitaire, intégration ou de bout en bout), et expliquez pourquoi.
    - Les tests vu à la question précédente sont des test end to end (bout en bout).
    - Dans le dossier '/test/unit/', il y a des tests unitaires, ils testent qu'une seul fonction à la fois.
    - Il n'y a pas de test d'intégration dans ce projet

- Dans cette suite de tests, qu’est-ce qui nous permet de reconnaître les tests de bout en bout ?
    - Les tests envoient des données en entrée et regarde ce que le programme retourne en sortie.

Est-ce que un ou plusieurs types de tests manquent ? Pourquoi, d’après vous ?
    - Il manque les tests d'intégrations, ils ne devaient pas être nécéssaire dans ce projet.

- Quel aurait été l’intérêt de regrouper toutes les assertions dans un même test ?


- Inversement, quel est l’intérêt d’avoir écrit des tests séparés ?
- A quoi sert le module expect.js ?
- Quelles fonctions sont fournies par expect.js ?
Que veut dire .to.eql() ? Pourquoi l’a-t-on utilisé à la place de .to.equal() ?
- Aurait-on pu se passer de expect.js / utiliser un autre module ? Dans quel intérêt ?

### Q2 : Des tests pour éviter les régressions
- Citez un exemple de test unitaire inclus dans ce projet.
    - Quels indices permettent de reconnaître qu’il s’agit d’un test unitaire ?
    - Quel modules sont utilisés pour écrire et exécuter ce test ?
- Citez un exemple de test d’intégration inclus dans ce projet.
    - Quels indices permettent de reconnaître qu’il s’agit d’un test d’intégration ?
    - Quel modules sont utilisés pour écrire et exécuter ce test ?
- Citez un exemple de test de bout en bout inclus dans ce projet.
    - Quels indices permettent de reconnaître qu’il s’agit d’un test de bout en bout ?
Quel modules sont utilisés pour écrire et exécuter ce test ?

### Q3 : Écrire des tests unitaires
Fichier /test/test.js
```javascript
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
```

### Q4 : Écrire un test de bout en bout
```javascript
//  TODO
```


### Q5 : Outils pour améliorer la qualité du code
```javascript
//  DONE
```

### Q6 : Mise en place d’intégration continue avec GitHub Actions
```javascript
//  IN PROGRESS
```

Site web source :
- https://adrienjoly.com/cours-nodejs/