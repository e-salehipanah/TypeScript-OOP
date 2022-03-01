export class Animal {
    age: number;
    legs: number;
    name: string;

    constructor(age: number,legs:number,name:string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
}

// inherit

export class Cat extends Animal {
    constructor(data:{age: number,legs:number,name:string}){
        super(data.age,data.legs,data.name);
    }
    meow():string{
        return "MEOW";
    }
}

// implement

export class Dog implements Animal {
    age:number;
    legs:number;
    name:string;
    
    woof():string{
        return "WOOF!";
    }
}

const cat = new Cat({age:19,legs:4,name:"Baby"});
const dog = new Dog()

console.log(dog instanceof Animal);
// false
console.log(cat instanceof Animal);
// true
