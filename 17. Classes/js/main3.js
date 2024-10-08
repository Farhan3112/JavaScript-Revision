//Naming Convention for private properties
//Simple blueprint for an object here
// class Pizza {
//     constructor(pizzaSize) {
//       this._size = pizzaSize;
//       this._crust = "original";
//     }
//     getCrust() {
//       return this._crust;
//     }
//     setCrust(pizzaCrust) {
//       this._crust = pizzaCrust;
//     }
//   }


// Factory Function ->another way of creating object
//we cannot access crust and size variable outside of this scope, private variables, private properties that are not accessible through dot notation
// function pizzaFactory(pizzaSize) {
//     const crust = "original";
//     const size = pizzaSize;
//     return {
//         //bake function form factory function
//         bake: () => console.log(`Baking a ${size} ${crust} crust pizza`)
//     };
// }
// const myPizza = pizzaFactory("small");
// myPizza.bake();



//Classes now support public and private fields
//can access public inside and outside the class , but private can only be accesed inside the class
class Pizza {
    //public field
    crust = "original";
    //private field
    #sauce = "traditional";
    #size;
    constructor(pizzaSize) {
      this.#size = pizzaSize;
    }
    getCrust() {
      return this.crust;
    }
    setCrust(pizzaCrust) {
      this.crust = pizzaCrust;
    }
    hereYouGo(){
        console.log(`Here's your ${this.crust} ${this.#sauce} sauce ${this.#size} pizza.`);
    }
  }
const myPizza = new Pizza("large");
myPizza.hereYouGo();
// console.log(myPizza.crust);
console.log(myPizza.getCrust());
console.log(myPizza.sauce);