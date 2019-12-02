const makeDino = function(species, period, carnivore, extinct = false) {
  return {
    species,
    period,
    carnivore,
    extinct
  }
}

const makeSingular = function(dinosaur) {
  const {species, period, carnivore, extinct} = dinosaur;
  const newDino = makeDino(species, period, carnivore, extinct);

  if (species.endsWith('us')) {
    newDino.species = species.slice(0, -2);
  }

  return newDino;
}

const truncateSpecies = function(dinosaur) {
  const {species, period, carnivore, extinct} = dinosaur;
  const newDino = makeDino(species, period, carnivore, extinct);

  if (species.length > 10) {
    newDino.species = species.slice(0, 7) + '...';
  }

  return newDino;
}

const makeExtinct = function(dinosaur) {
  const {species, period, carnivore} = dinosaur;
  const newDino = makeDino(species, period, carnivore, true);

  return newDino;

  // Alternately (but including line 1 of this function)
  
  // return {
  //   species,
  //   period,
  //   carnivore,
  //   extinct: true
  // }
}

const isCarnivore = function(dinosaur) {
  return dinosaur['carnivore'] ? true : false
}

const isExtinct = function(dinosaur) {
  return dinosaur['extinct'] ? true : false

}

const isTriassic = function(dinosaur) {
  return dinosaur['period'] === 'Triassic'? true : false

}

const isJurassic = function(dinosaur) {
  return dinosaur['period'] === 'Jurassic'? true : false

}

const isCretaceous = function(dinosaur) {
  return dinosaur['period'] === 'Cretaceous'? true : false

}


module.exports = {
  makeDino,
  makeSingular,
  truncateSpecies,
  makeExtinct,
  isCarnivore,
  isExtinct,
  isTriassic,
  isJurassic,
  isCretaceous,
}