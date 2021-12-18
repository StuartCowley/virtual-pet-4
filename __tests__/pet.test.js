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
    it('has no initial mood', () => {
      const pet = new Pet('Fido');
      expect(pet.mood).toBe('');
    })
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

  describe('walk', () => {
    it('increases fitness by 4 when walk is called', () =>{
      const pet = new Pet('Fido');
      pet.fitness = 4;
      pet.walk();
      expect(pet.fitness).toEqual(8);
    });
    it('increases fitness to no higher than 10', () =>{
      const pet = new Pet('Fido');
      pet.fitness = 8;
      pet.walk();
      expect(pet.fitness).toEqual(10);
    })
  })

  describe('feed', () => {
    it('decreases hunger by 3 when feed is called', () => {
      const pet = new Pet('Fido');
      pet.hunger = 5;
      pet.feed();
      expect(pet.hunger).toEqual(2);
    });
    it('decreases hunger, but not to below 0, when feed is called', () => {
      const pet = new Pet('Fido');
      pet.hunger = 2;
      pet.feed();
      expect(pet.hunger).toEqual(0);
    });
  })

  describe('checkUp', () =>{
    it('pet asks for a walk if unfit', () =>{
      const pet = new Pet('Fido');
      pet.fitness = 1;
      pet.checkUp();
      expect(pet.mood).toBe('I need a walk');
    });
    it('pet asks for food if hungry', () =>{
      const pet = new Pet('Fido');
      pet.hunger = 6;
      pet.checkUp();
      expect(pet.mood).toBe('I am hungry');
    });
    it('pet asks for food and a walk if both unfit and hungry', () =>{
      const pet = new Pet('Fido');
      pet.fitness = 1;
      pet.hunger = 6;
      pet.checkUp();
      expect(pet.mood).toBe('I am hungry AND I need a walk');
    });
    it('pet declares it is happy if both fed and fit', () =>{
      const pet = new Pet('Fido');
      pet.fitness = 4;
      pet.hunger = 4;
      pet.checkUp();
      expect(pet.mood).toBe('I feel great!');
    })
  });