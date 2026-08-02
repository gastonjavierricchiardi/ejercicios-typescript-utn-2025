import Cat from "./cat";

export default class PersianCat  extends Cat 
{
    public makeNoise(): void {
        console.log("meow meow como un gato persa"); 
    }
}