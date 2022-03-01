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

// Child Class

export class Cat extends Animal {
    meow():string{
        return "MEOW";
    }
}

const cat = new Cat(19,4,"Baby");
