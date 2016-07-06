/**
 * Created by Administrator on 2016/7/5.
 */
/**
 * Created by Administrator on 2016/7/5.
 */
/**
 * Created by Administrator on 2016/7/5.
 */
import {Component} from 'angular2/core';
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {Router} from "angular2/router";
import {RouteParams} from "angular2/router";
import {OnInit} from "angular2/core";

@Component({

  template:`
     <div>
        <div>
          <label for="first-name">First Name:</label>
          <input type="text" id="first-name" #firstName/>
         </div>
         <div>
          <label for="last-name">Last Name:</label>
        <input  type="text" id="last-name" #lastName value="{{passedlastName}}"/>
         </div>
         <div>
          <label for="phone">Fhone:</label>
          <input  type="text" id="phone" #phone/>
         </div>
         <div>
          <label for="email">Email:</label>
          <input type="text" id="email" #email/>
         </div>
         <button (click)="onAddContact(firstName.value,lastName.value,phone.value,email.value)">Create Contact</button>
   </div>

    `,
  providers:[ContactService],
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

export class NewContactComponent implements OnInit{
  public passedlastName ='';

  constructor(private _contactService :ContactService,private _router:Router,private _routeParams:RouteParams){

  }

  onAddContact(firstname,lastName,phone,email){
    //const dumyContact ={firstName:'Dummy',lastName:'Contact',phone:'42341234',email:'hgehrgi@qq.com'};
    let contact:Contact ={firstName:firstname,lastName:lastName,phone:phone,email:email};
    this._contactService.insertContact(contact);
    this._router.navigate(['Contacts']);
  }

  ngOnInit():any{
    this.passedlastName = this._routeParams.get('lastName');
  }

}


