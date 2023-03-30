import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MyContact } from 'src/models/myContact';
import { MyGroup } from 'src/models/myGroup';
import { ApiService } from '../sevices/api.service';

@Component({
  selector: 'app-update-contact',
  templateUrl: './update-contact.component.html',
  styleUrls: ['./update-contact.component.css']
})
export class UpdateContactComponent implements OnInit {

  contactId:string=''
  contact:MyContact={} as MyContact
  groups:MyGroup[]=[] as MyGroup[]
  constructor (private activateRoute:ActivatedRoute,private api:ApiService,private router:Router){

  }

  ngOnInit(): void {

    // get contact id from url parameter using ActivateRoute class

      this.activateRoute.params.subscribe((data:any)=>{
      this.contactId=data['contactId']
      console.log(this.contactId)
    })
    
    // call api for getting all groups from service class

      this.api.getAllGroups().subscribe((data:any)=>{
      this.groups=data
    })

    // call api for getting perticular contact details 

    this.api.viewContact(this.contactId).subscribe((data:any)=>{
      this.contact=data
    })

  }
// Update contact
// api call for updatging existing contact, arg : updatet contact , contact id 
    updateContact(){
      this.api.updateContact(this.contactId,this.contact).subscribe((data:any)=>{
        // Navigate to admin page
        this.router.navigateByUrl('')
      })
  }
}
