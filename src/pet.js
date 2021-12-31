const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const FITNESS_THRESHOLD = 3;
const HUNGER_THRESHOLD = 5;
const AGE_LIMIT = 30;
const HUNGER_LIMIT = 10;
const FITNESS_LIMIT = 0;

function Pet(name){
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.children = [];
    Pet.prototype = {
        get isAlive() {
            return (this.age < AGE_LIMIT) && (this.hunger < HUNGER_LIMIT) && (this.fitness > FITNESS_LIMIT);
        }
    };
    this.growUp = function(){
        if (!this.isAlive){
            throw new Error('Your pet is no longer alive :(')
        }
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    };
    this.walk = function(){
        if (!this.isAlive){
            throw new Error('Your pet is no longer alive :(')
        }
        if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
            this.fitness += 4;
        } else {
            this.fitness = MAXIMUM_FITNESS;
        }
    };
    this.feed = function(){
        if (!this.isAlive){
            throw new Error('Your pet is no longer alive :(')
        }
        if ((this.hunger - 3) >= MINIMUM_HUNGER){
            this.hunger -= 3;
        } else {
            this.hunger = MINIMUM_HUNGER;
        }
    };
    this.checkUp = function(){
        if (this.age >= AGE_LIMIT || this.hunger >= HUNGER_LIMIT || this.fitness <= FITNESS_LIMIT){
            return 'Your pet is no longer alive :('
        } else if (this.fitness <= FITNESS_THRESHOLD && this.hunger >= HUNGER_THRESHOLD) {
            return 'I am hungry AND I need a walk'; 
        } else if (this.hunger >= HUNGER_THRESHOLD) {
            return 'I am hungry';
        } else if (this.fitness <= FITNESS_THRESHOLD) {
            return 'I need a walk';
        } else {
            return 'I feel great!';
        }
    };
    this.adoptChild = function(child){
        if (!this.isAlive){
            throw new Error('Your pet is no longer alive :(')
        }
        if (!child.isAlive){
            throw new Error('Your pets child is no longer alive :(')
        }
        this.children.push(child);
    };
    this.haveBaby = function(childName){
        if (!this.isAlive){
            throw new Error('Your pet is no longer alive :(')
        }
        this.children.push(new Pet(childName));
    }
}

module.exports = Pet;



