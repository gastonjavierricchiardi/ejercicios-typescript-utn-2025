import Animal from "./animal";

export default class Cat extends Animal { 
    public makeNoise(): void { 
        console.log("meow meow"); 
    } 
}