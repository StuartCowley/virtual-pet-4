const MAXIMUM_FITNESS = 10;
const MINIMUM_HUNGER = 0;
const FITNESS_THRESHOLD = 3;
const HUNGER_THRESHOLD = 5;

function Pet(name){
    this.name = name;
    this.age = 0;
    this.hunger = 0;
    this.fitness = 10;
    this.mood = '';
    this.growUp = function(){
        this.age += 1;
        this.hunger += 5;
        this.fitness -= 3;
    };
    this.walk = function(){
        if ((this.fitness + 4) <= MAXIMUM_FITNESS) {
            this.fitness += 4;
        } else {
            this.fitness = MAXIMUM_FITNESS;
        }
    };
    this.feed = function(){
        if ((this.hunger - 3) >= MINIMUM_HUNGER){
            this.hunger -= 3;
        } else {
            this.hunger = MINIMUM_HUNGER;
        }
    };
    this.checkUp = function(){
        if ((this.fitness <= FITNESS_THRESHOLD) && (this.hunger >= HUNGER_THRESHOLD)){
            this.mood = 'I am hungry AND I need a walk'; 
        } else if (this.hunger >= HUNGER_THRESHOLD) {
            this.mood = 'I am hungry';
        } else if (this.fitness <= FITNESS_THRESHOLD) {
            this.mood = 'I need a walk';
        } else {
            this.mood = 'I feel great!';
        }
    };
}

module.exports = Pet;



