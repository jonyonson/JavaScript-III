// Stretch task:
// * Create Villain and Hero constructor functions that inherit from the Humanoid constructor function.
// * Give the Hero and Villains different methods that could be used to remove health points from objects which could result in destruction if health gets to 0 or drops below 0;
// * Create two new objects, one a villain and one a hero and fight it out with methods!

CharacterStats.prototype.takeDamage = function() {
  if (this.healthPoints < 1) {
    return `${this.name} has already been destroyed`;
  }
  this.healthPoints = this.healthPoints - 1;
  if (this.healthPoints > 0) {
    return `${this.name} was hit and took damage. ${this.healthPoints} health points remaining.`;
  } else {
    return this.destroy();
  }
};

function Villain(attributes) {
  Humanoid.call(this, attributes);
}

Villain.prototype = Object.create(Humanoid.prototype);

function Hero(attributes) {
  Humanoid.call(this, attributes);
}

Hero.prototype = Object.create(Humanoid.prototype);

const hero1 = new Hero({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Bob',
  team: 'Forest Kingdom',
  weapons: ['Bow', 'Dagger'],
  language: 'Elvish',
});

const villain1 = new Villain({
  createdAt: new Date(),
  dimensions: {
    length: 1,
    width: 2,
    height: 4,
  },
  healthPoints: 10,
  name: 'Billy',
  team: 'Forest Kingdom',
  weapons: ['Bow', 'Dagger'],
  language: 'Elvish',
});

console.log(villain1.takeDamage());
console.log(villain1.takeDamage());
console.log(villain1.takeDamage());
console.log(villain1.takeDamage());
console.log(villain1.takeDamage());
console.log(villain1.takeDamage());
console.log(villain1.takeDamage());
console.log(villain1.takeDamage());
console.log(villain1.takeDamage());
console.log(villain1.takeDamage());
