import Animal from "./animal";

export default class Dog extends Animal {
    public makeNoise(): void {
        console.log("bow wow");
    }
}
