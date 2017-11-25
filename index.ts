class ChangeUl {
    readonly text = 'Пункт';
    private ul: any;
    private li: any;

    constructor(ul: any) {
        this.ul = ul;
        this.li = this.ul.children;
    }

    //визначення довжини списку
    private le(): number {
        let ulLength = this.li.length;
        console.log('length' + ulLength);
        return ++ulLength
    }

    //додавання елементу
    public addItem() {
        let liNew = document.createElement('li');
        liNew.innerHTML = this.composeName(this.le());
        this.ul.appendChild(liNew);
        console.log('add');
    }

    //видалення елементів

    public remItem() {
        let lastItem: number;
        lastItem = this.le() - 2;
        this.ul.removeChild(this.li[lastItem]);
        console.log('rem');
    }

    public composeName(i: number): string {
        return this.text + ' ' + i.toString()
    };
}
let clickAdd = new ChangeUl(document.getElementById('list'));
document.getElementById('add').onclick = function () {
    clickAdd.addItem()
};
document.getElementById('remove').onclick = function () {
    clickAdd.remItem()
};


/*HomeTask2*/
interface ISpeak{
    sayHello(name:string):string;
}
class Speak_1 implements ISpeak{
    private n:string;
    constructor (n:string):void{
        this.n = n;
    }
    private sayHello(n: string):string{
        let text:string = 'Hello, my name is' + this.n;
     return text;
    }
}



class Speak_2 implements ISpeak{
    private n:string;
    private sayHello(n: string):string{
        let text:string = 'Hello, my name is' + this.n;
        return text;
    }
}
class Speak_3 implements ISpeak{
    private n:string;
    private sayHello(n: string):string{
        let text:string = 'Hello, my name is' + this.n;
        return text;
    }
}

const object1:ISpeak = new Speak_1(John);
const object2:ISpeak = new Speak_2(Jane);
const object3:ISpeak = new Speak_3(Jonathan);
const oList:ISpeak[] = [object1,object2,object3];
/********************************/
class Speak(arr:[]):void{
    private arr:ISpeak[];
    constructor(arr:[]):void{
        this.arr = arr;
    }
 }

