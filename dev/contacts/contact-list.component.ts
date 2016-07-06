/**
 * Created by Administrator on 2016/7/5.
 */
import {Component} from 'angular2/core';
import {ContactComponent} from './contact-component'
import {ContactService} from "./contact.service";
import {Contact} from "./contact";
import {OnInit} from "angular2/core";

@Component({
    selector:'contact-list',
    template:`
    <ul>
      <li *ngFor="#contact of contacts"
        (click)="onSelect(contact)"
        [class.clicked]="selectedContact===contact"
        >
        {{contact.firstName}} {{contact.email}}
      </li>
    </ul>
    <contact *ngIf="selectedContact !==null" [contact]="selectedContact"></contact>
    `,
    directives:[ContactComponent],
    providers:[ContactService],
    styleUrls:["../src/css/contact-list.css"]
})

export class ContactListComponent implements OnInit{
  public contacts : Contact[];

  //public selectedContact = {};
  public selectedContact = null;
  public showDetail = false;

  onSelect(contact){
    this.selectedContact = contact;
    this.showDetail = true;
  }

  constructor(private _contactService:ContactService){

  }

  getContacts(){
    this._contactService.getContacts().then((contact:Contact[])=>this.contacts = contact);
  }

  ngOnInit():any{
    this.getContacts();
  }
}
