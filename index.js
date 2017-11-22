var ChangeUl = /** @class */ (function () {
    function ChangeUl(ul) {
        this.text = 'Пункт';
        this.ul = ul;
        this.li = this.ul.children;
    }
    //визначення довжини списку
    ChangeUl.prototype.le = function () {
        var ulLength = this.li.length;
        console.log('length' + ulLength);
        return ++ulLength;
    };
    //додавання елементу
    ChangeUl.prototype.addItem = function () {
        var liNew = document.createElement('li');
        liNew.innerHTML = this.composeName(this.le());
        this.ul.appendChild(liNew);
        console.log('add');
    };
    //видалення елементів
    ChangeUl.prototype.remItem = function () {
        var lastItem;
        lastItem = this.le() - 2;
        this.ul.removeChild(this.li[lastItem]);
        console.log('rem');
    };
    ChangeUl.prototype.composeName = function (i) {
        return this.text + ' ' + i.toString();
    };
    ;
    return ChangeUl;
}());
var clickAdd = new ChangeUl(document.getElementById('list'));
document.getElementById('add').onclick = function () { clickAdd.addItem(); };
document.getElementById('remove').onclick = function () { clickAdd.remItem(); };
