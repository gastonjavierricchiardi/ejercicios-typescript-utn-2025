import MyNode from "./myNode";
import Paciente from "./pacientes";

export default class MyLista<T> {
    private head: MyNode<T>; 
    constructor() { 
        this.head = undefined as unknown as MyNode<T>; 
    } 
    public push(value: T): MyNode<T> 
    { 
        const node = new MyNode(value); 
        let headAux = this.head; 
        while (headAux && headAux.next) 
        { 
            headAux = headAux.next; 
        } 
        if (!headAux) 
        { 
            this.head = node 
        } else { 
            headAux.next = node; 
        } 
        return node; 
    } 
    public pop(): T 
    { 
        let value = undefined; 
        let headAux = this.head;
        let previous: MyNode<T> = undefined as unknown as MyNode<T>;
        while (headAux && headAux.next) { 
            previous = headAux; 
            headAux = headAux.next;
        } 
        if (!previous) { 
            this.head = undefined as unknown as MyNode<T>; 
        } else { 
            previous.next = undefined as unknown as MyNode<T>; 
        } 
        value = headAux.value; 
        return value; 
    } 
    
    public insertFirst(value: T): MyNode<T> 
    { 
        const node = new MyNode(value); 
        node.next = this.head; 
        this.head = node; 
        return node; 
    }
   
    public removeFirst(): T 
    {
    let value = undefined as unknown as T;
    if (this.head)
        { value = this.head.value; 
            this.head = this.head.next; 
        } 
        return value; 
    } 
    
    public insertOrdered(value: T): MyNode<T> 
    { 
        const node = new MyNode(value); 
        let headAux = this.head; 
        let previous: MyNode<T> = undefined as unknown as MyNode<T>; 
        while (headAux && headAux.value < value) { 
            previous = headAux; 
            headAux = headAux.next; 
        } 
        if (!previous) { 
            this.head = node; 
        } else { 
            previous.next = node; 
        } 
        node.next = headAux; 
        return node; 
    } 
    
    insertUnique(value: T): MyNode<T> { 
        const node = this.search(value); 
        if (!node) { 
            this.insertOrdered(value); 
        } 
        return node; 
    } 

    public delete(value: T): T 
    {
        let headAux = this.head; 
        let previous: MyNode<T> = undefined as unknown as MyNode<T>; 
        while (headAux && headAux.value !== value) 
        { previous = headAux; headAux = headAux.next; 

        } 
        if (!previous) { 
            this.head = headAux.next; 
        } else { 
            previous.next = headAux.next; 
        } 
        return headAux.value;
    } 


    public insertarElementoDespuesDe(value : T, elementoBefore : T) : MyNode<T>
    {
        const newNode = new MyNode(value);
        const nodoAnterior = new MyNode(elementoBefore);

        const nodoAuxiliar = (nodoAnterior.next.value as MyNode<Paciente>);

        //newNode.next = (nodoAuxiliar as MyNode<Paciente>);
        nodoAnterior.next = newNode;

        if (newNode != this.head)
            newNode.next = nodoAuxiliar;
    
        return newNode;
    }
    public search(value: T): MyNode<T> 
    { 
        let headAux = this.head; 
        while (headAux && headAux.value !== value) 
        { 
            headAux = headAux.next; 

        } 
        return headAux; 
    } 
    
    public sort(): void 
    { 
        let value: T; 
        let listAux = new MyLista<T>(); 
        while (this.head) 
        {
                value = this.removeFirst(); 
                listAux.insertOrdered(value); 
        } 
        this.head = listAux.head; 
        listAux.clear(); 
    }


    public imprimirTodo(): void
    {
        this.imprimir(this.head);
    }
    private imprimir(pNodo : MyNode<T>): void
    {
        
        if (pNodo.value instanceof Paciente)
            console.log((pNodo.value as Paciente).codigo);

        if(pNodo.next)
        {
            this.imprimir(pNodo.next);
        }
    }
            
    public clear(): void
    { 
        while (this.head) { 
            this.removeFirst(); 
        } 
    }
} 