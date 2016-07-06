/**
 * Created by Administrator on 2016/7/5.
 */
/**
 * Created by Administrator on 2016/7/5.
 */
import {Component} from 'angular2/core';
import {Router} from "angular2/router";
import {Contact} from "./contact";

@Component({
  selector:'contact',
  template:`
  <div>
    <div>
      <label for="first-name">First Name:</label>
      <input [(ngModel)]="contact.firstName" type="text" id="first-name"/>
     </div>
     <div>
      <label for="last-name">Last Name:</label>
    <input [(ngModel)]="contact.lastName" type="text" id="last-name"/>
     </div>
     <div>
      <label for="phone">Fhone:</label>
      <input [(ngModel)]="contact.phone" type="text" id="phone"/>
     </div>
     <div>
      <label for="email">Email:</label>
      <input [(ngModel)]="contact.email" type="text" id="email"/>
     </div>
     <button (click)="onCreateNew()">Create new Contact from this contact</button>
   </div>



    `,
  inputs:["contact"],
  styles:[`
    label{
      display:inline-block;
      width:140px;
    }
    input{
      width:250px;
    }
  `]
})

export class ContactComponent{
    public contact:Contact =null;

  constructor(private _router:Router){

  }
  onCreateNew(){
    this._router.navigate(['NewContactFromContact',{lastName:this.contact.lastName}])
  }
}

/*如何将父类的数据传入到子类，需在父类建立一个和子类一样的变量，子类用inputs接受放入自己的类中
* <contact [contact]="selectedContact"></contact>
*
*  inputs:["contact"]
*
* */
