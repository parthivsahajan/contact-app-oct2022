import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  MyContact } from 'src/models/myContact';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:string="http://localhost:3000/contacts"
  secondUrl:string="http://localhost:3000/groups/"
  constructor(private http:HttpClient) { }

  // api call for get all contacts
  getAllContacts():Observable< MyContact>{
   return this.http.get(this.baseUrl)
  }

  // function for view a perticular contact

  viewContact(contactId:string){
    return this.http.get(`${this.baseUrl}/${contactId}`)
  }

  // function for getting a perticular group

  getGroupName(groupId:string){
   return this.http.get(`${this.secondUrl}/${groupId}`)
  }

  // function for fetch all group from http://localhost:3000/groups
  getAllGroups(){
    return this.http.get('http://localhost:3000/groups')
  }

  // function for adding new contact to sderver 

  addContact(contactBody:any){
   return this.http.post(this.baseUrl,contactBody)
  }
}
