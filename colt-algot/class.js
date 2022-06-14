class Clown {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
  }

  // instance method
  shout() {
    console.log('Hi kids!');
  }

  // Class method - ei sidonnainen tiettyyn instanceen
  // voi javassa duunaa utilseja
  static giggle() {
    console.log('hihi s');
  }
  // ei kutsuta class instancen kautta
}

const pelle = new Clown('otso');

pelle.shout();

Clown.giggle();
// interesting
