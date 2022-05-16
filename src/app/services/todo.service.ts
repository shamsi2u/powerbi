import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/compat/database'

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  toDoList: AngularFireList<any>;
  toDoList1: AngularFireList<any>;

  constructor(private firebasedb: AngularFireDatabase) { }
  getToDoList() {

    let admin :any = localStorage.getItem("is_admin");
    console.log(admin);
    if( admin =='true'){
      console.log("if");
      this.toDoList = this.firebasedb.list('titles');
      return this.toDoList;
    }
    else{
      console.log("else");
      this.toDoList1 = this.firebasedb.list('titles1');
      return this.toDoList1;
    }
  }

  addTitle(title: string) {
    if(localStorage.getItem("is_admin")=='true'){
      this.toDoList.push({
        title: title,
        isChecked: false
      });
    }
      else{
        this.toDoList1.push({
          title: title,
          isChecked: false
        });
      }
    }



  checkOrUnCheckTitle($key: string, flag: boolean) {
    if(localStorage.getItem("is_admin")=='true'){
      this.toDoList.update($key, { isChecked: flag });
    }
    else{
      this.toDoList1.update($key, { isChecked: flag });
    }
  }

  removeTitle($key: string) {
    if(localStorage.getItem("is_admin")=='true'){
      this.toDoList.remove($key);
    }
    else{
      this.toDoList1.remove($key);
    }
  }
}
