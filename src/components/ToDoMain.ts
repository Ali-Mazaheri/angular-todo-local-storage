import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {ToDoItem} from "./ToDoItem";
import {ToDoModel} from "../models/ToDoModel";

@Component({
  selector: 'ToDoMain',
  providers: [],
  templateUrl: '../staticFiles/ToDoMainTemplate.html'
})
export class ToDoMain {
  items = null;
  constructor() {
    var data = localStorage.getItem('angularTodoApp');
    this.items = (data && data.length) ? JSON.parse(data) : [{id:0, isChecked: false, toDo: 'Add New Items'}];
  }
  
  public onAddNewItem(ref){
    let val = (ref && ref.value && ref.value.length)? ref.value: "New Item";
      var newToDO = new ToDoModel(this._getNewId(),val );
      this.items.push(newToDO);
      ref.value = '';
      this._storeData();
  }
  
  private _storeData(){
    localStorage.setItem('stored', JSON.stringify(this.items));
  }
  
  private _getNewId(){
    var newId;
    do{
    newId = parseInt((Math.random() *1000000).toString());
    } while (this.items.some(function(item){return item.id == newId }));
    
    return newId;
  }
}