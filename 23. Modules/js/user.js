export default class User {
    constructor(email, name){
        this._id = email; //"_"underscores used in the contructor means dont access these properties without a getter and a setter
        this._name = name;
    }

    greeting(){
        return `Hi, my name is ${this._name}.`
    }
}