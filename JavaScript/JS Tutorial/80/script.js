// let obj = {
//     a: 1,
//     b: "Kailash"
// }

// console.log(obj);

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__ = animal; // sets rabbit.[[Prototype]] = animal

class Animal {
    constructor(name){
        this.name = name;
        console.log("Object is created....");
    }
    eats(){
        console.log("Kha rha hoon");
    }
    jumps(){
        console.log("kood rha hoon");
    }
}

class Lion extends Animal{
    constructor(name){
        super(name);
        console.log("Object is creates and he is a lion...");
    }
    eats(){
        super.eats()
        console.log("Kha rha hoon roar");
    }
}

let a = new Animal("Kailash");
console.log(a);

let l = new Lion("Shera");
console.log(l);