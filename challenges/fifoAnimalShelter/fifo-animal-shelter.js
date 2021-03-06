class AnimaleShelter {
  constructor() {
    // either 'dog' or 'cat' in array
    this.items = [];
  }

  enqueue (animal) {
    return this.items.push(animal);
  }

  dequeue (pref) {
    for (let i = 0 ; i < this.items.length; i++) {
      if (this.items[i] === pref) {
        return this.items.splice(i,1);
      }
    }
    return `No ${pref} in Shelter`;
  }

}

module.exports = AnimaleShelter;