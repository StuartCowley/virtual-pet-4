This is a readme for the Virtual Pet Project as per the Software Engineer Fasttrack course at Manchester Codes.

As per the instructions provided on the platform, the pet function has been created allowing the user to create a pet by inputting what they want to name their pet when they call the function. When the function is called, a new pet will be created in the form of an object, with key-values pairs including name, age, hunger, fitness and an array containing any children your pet may have.

To get started, open node in your terminal and type the following:

const Pet require('./src/pet');

And then type, for example to create a new pet called "Rex":

const rex = new Pet('Rex'); //where 'Rex' is your new pet's name

To check Rex's name, age, fitness, or hunger, type the following:

rex.name, rex.age, rex.fitness, rex.hunger, respectively.

By default, Rex's age is 0, his fitness is 10, his hunger is 0 and he has no children, so rex.children will return an empty array. Be aware: Rex will pass away if his age reaches 30, or his fitness falls to 0, or if his hunger reaches 10. The following functions can be called on Rex at any time:

rex.growUp(); This will increase Rex's age by 1, but will also increase his hunger by 5 and decrease his fitness by 3.

rex.walk(); This will increase Rex's fitness by 4, and be capped at 10.

rex.feed(); This will decrease Rex's hunger by 3, and can't fall below 0.

rex.checkUp(); This will look at Rex's age, fitness and hunger and return a message saying whether Rex needs feeding or walking (or both).

rex.haveBaby('Amy'); This will create a new pet object within rex.children and name it 'Amy', for example, but you can name the child whatever you want.

rex.adoptChild(matt); This will push matt into rex.children, meaning Rex has effectively adopted Matt as his child. Make sure that matt has already been created (const matt = new Pet('Matt')) before you do this. You can't push Matt into rex.children if he doesn't exist yet. This is an alternative way of allowing Rex to have a child.

Remember that Rex's children will be stored in an array, which are "zero-indexed", which means that Rex's first child can be called with rex.children[0], his second with rex.children[1], his third with rex.children[2] and so on. Furthermore, to check the name/age/fitness etc of Rex's children, type for example rex.children[0].name

rex.haveBaby('Amy');

rex.children[0].name; //should say 'Amy'