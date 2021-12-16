function Pet(name){
    this.name = name;
    this.age = 0;
    this.growUp = function(){
        this.age += 1;
    };
}

const fido = new Pet('Fido');
const rex = new Pet('Rex');

module.exports = Pet;



