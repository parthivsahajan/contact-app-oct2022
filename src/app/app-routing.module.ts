import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './add-contact/add-contact.component';
import { ContactManagerComponent } from './contact-manager/contact-manager.component';
import { PageNotfoundComponent } from './page-notfound/page-notfound.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';
import { ViewContactComponent } from './view-contact/view-contact.component';

const routes: Routes = [
  // to radirect automatically from  localhost:4200 to contactManager
  {
    path:'',redirectTo:'/contacts/admin',pathMatch:'full'
  },
  //path for  ContactManagerComponent = home
  {
    path:'contacts/admin',component:ContactManagerComponent
  },
  //AddContactComponent
  {
    path:'contacts/add',component:AddContactComponent
  },
  //UpdateContactComponent
  {
    path:'contacts/edit/:contactId',component:UpdateContactComponent
  },
  //ViewContactComponent
  {
    path:'contacts/view/:contactId',component:ViewContactComponent
  },
  //PageNotfoundComponent
  {
    path:'**',component:PageNotfoundComponent
  }
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
