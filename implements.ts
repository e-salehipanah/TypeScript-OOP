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

// Child Class + Same Shape

export class Dog implements Animal {
    // same like animal : start
    age: number | 0;
    legs:number;
    name:string;
    // same like animal : end

    woof():string{
        return "WOOF!";
    }
}


