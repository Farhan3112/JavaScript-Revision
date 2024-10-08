//parent class / Super class -> use this as a blueprint
class Pizza {
  constructor(pizzaSize) {
    this.size = pizzaSize;
    this.crust = "original";
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
}
//create child calss bsed on parent/Super class
class SpeacialtyPizza extends Pizza {
  constructor(pizzaSize){
    //super keyword calls the contructor of the parent
    super(pizzaSize);
    this.type = "The Works"
  }
  slice(){
    console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
  }
}

const mySpecailty = new SpeacialtyPizza("medium");
  mySpecailty.slice();
