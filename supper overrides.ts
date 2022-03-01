export class Animal {
  age: number;
  legs: number;
  name: string;

  //* override *//
  lives = 1;

  constructor(age: number, legs: number, name: string) {
    this.age = age;
    this.legs = legs;
    this.name = name;
  }

  //* override *//
  meow(): string {
    return "ROAR!";
  }
}

// Child Class

export class Cat extends Animal {
  //* override *//
  lives = 9;
  constructor(data: { age: number; legs: number; name: string }) {
    super(data.age, data.legs, data.name);
  }
  meow(): string {
    //* use super class method & attributes *//
    super.meow();
    super.lives;
    return "MEOW";
  }
}

const cat = new Cat({ age: 19, legs: 4, name: "Baby" });
