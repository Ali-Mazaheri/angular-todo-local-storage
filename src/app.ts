//our root app component
import {Component, NgModule} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import {ToDoMain} from "./components/ToDoMain"
import {ToDoItem} from "./components/ToDoItem"

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ ToDoMain, ToDoItem ],
  bootstrap: [ ToDoMain ]
})
export class AppModule {}