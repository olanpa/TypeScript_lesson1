class ChangeUl{
    readonly text= 'Пункт';
    private ul:any;
    private li:any;
    constructor (ul:any){
                this.ul = ul;
                this.li = this.ul.children;
                 }
   //визначення довжини списку
   public le():number{
            let ulLength = this.li.length;
            console.log('length'+ulLength);
            return ++ulLength
   }
   //додавання елементу
    public addItem(){
        let liNew = document.createElement('li');
        liNew.innerHTML = this.composeName(this.le());
        this.ul.appendChild(liNew);
        console.log('add');
    }
    //видалення елементів

    public remItem(){
    let lastItem: number;
    lastItem = this.le() - 2;
            this.ul.removeChild(this.li[lastItem]);
            console.log('rem');
        }

    public composeName(i:number):string{
    return this.text + ' ' + i.toString()
    };
}
let clickAdd = new ChangeUl( document.getElementById('list'));
document.getElementById('add').onclick = function(){clickAdd.addItem()};
document.getElementById('remove').onclick = function(){clickAdd.remItem()};

