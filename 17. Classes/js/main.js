// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

// Javascript CLASSES
//blueprint/template for creating an object
class Pizza {
    constructor(pizzaType, pizzaSize){
        this.type = pizzaType;
        this.size = pizzaSize;
        this.crust = "original";
        this.toppings = [];
    }
    // get pizzaCrust(){
    //     return this.crust;
    // }
    // set pizzaCrust(pizzaCrust){
    //     this.crust = pizzaCrust;
    // }

    //instead of get and set we canjust create methods, easy readability, they do the same thing as get and set
    getCrust(){
        return this.crust;
    }
    setCrust(pizzaCrust){
        this.crust = pizzaCrust;
    }

    getToppings(){
        return this.toppings;
    }
    setToppings(toppings){
        this.toppings.push(toppings)
    }

    bake(){
        console.log(`Baking a ${this.size} ${this.type} ${this.crust} crust pizza.`);
    }
}
//pass parameters in the created new object using the new keyword
// const myPizza = new Pizza("pepperoni", "small");
//myPizza.type = "supreme"
// myPizza.pizzaCrust = "thin";
// myPizza.setCrust("thin");
// myPizza.bake();
// console.log(myPizza.type);
//console.log(myPizza.pizzaCrust);
// console.log(myPizza.getCrust());
// myPizza.setToppings("sausage")
// myPizza.setToppings("olives")
// console.log(myPizza.getToppings());