const Pet = require('../src/pet');

describe('constructor', () => {
    it('returns an object', () => {
      expect(new Pet('Fido')).toBeInstanceOf(Object);
    });
    it('sets the name property', () => {
      const pet = new Pet('Fido');
      expect(pet.name).toEqual('Fido');
    });
    it('has an initial age of 0', () => {
      const pet = new Pet('Fido');
      expect(pet.age).toEqual(0);
    });
    it('has initial hunger of 0', () =>{
      const pet = new Pet('Fido');
      expect(pet.hunger).toEqual(0);
    });
    it('has initial fitness of 10', () => {
      const pet = new Pet('Fido');
      expect(pet.fitness).toEqual(10);
    });
  });
  
  describe('growUp', () => {
    it('increments Fidos age by 1', () =>{
      const pet = new Pet('Fido');
      pet.growUp();
      expect(pet.age).toEqual(1);
    });
    it('increments Fidos age by 3 if we call the function 3 times', () =>{
      const pet = new Pet('Fido)');
      pet.growUp();
      pet.growUp();
      pet.growUp();
      expect(pet.age).toEqual(3);
    })
  });

  describe('hunger', ()=> {
    it('increments Fidos hunger by 5 on aging by 1', () =>{
      const fido = new Pet('Fido');
      fido.growUp();
      expect(fido.hunger).toEqual(5);
    })
  })

  describe('fitness', () => {
    it('decreases Fidos fitness by 3 on aging by 1', () =>{
      const fido = new Pet('Fido');
      fido.growUp();
      expect(fido.fitness).toEqual(7);
    })
  })