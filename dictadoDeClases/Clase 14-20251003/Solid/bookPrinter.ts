import Book from "./responsabilidadunica";

export default class BookPrinter
{
    constructor(){};

    public printTextToConsole(unLibro : Book): void
    {
        console.log(unLibro.text);
    }
}