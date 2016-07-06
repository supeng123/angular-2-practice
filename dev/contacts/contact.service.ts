/**
 * Created by Administrator on 2016/7/5.
 */
import {Injectable} from 'angular2/core';
import {CONTACTS} from './mock-contacts'
import {Contact} from "./contact";

@Injectable()

export class ContactService{
  getContacts(){
   return Promise.resolve(CONTACTS);
  }
  insertContact(contact:Contact){
    return Promise.resolve(CONTACTS).then((contacts:Contact[])=>contacts.push(contact))
  }
}
