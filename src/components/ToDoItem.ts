//our root app component
import {Component, Input} from '@angular/core'

@Component({
  selector: 'toDoItem',
  providers: [],
  templateUrl: '../staticFiles/ToDoItemTemplate.html'
})
export class ToDoItem {
  @Input() item;
  @Input() list;
  @Input() index;
  constructor() {
  }
  
  public onEditItem(ref){
    var i = this.list.indexOf(this.item);
    this.list[i].toDo=ref;
    this._storeData();
  }
  
  public onToggleDoneItem(){
    var i = this.list.indexOf(this.item);
    this.list[i].isChecked = !this.list[i].isChecked;
    this._storeData();
    
  }
  
  public onDeleteItem(){
    var i = this.list.indexOf(this.item);
    this.list.splice(i,1);
    this._storeData();
  }
  
  private _storeData(){
    localStorage.setItem('stored', JSON.stringify(this.list));
  }
}