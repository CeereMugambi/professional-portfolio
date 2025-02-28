import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactComponent } from './contact/contact.component';
import { ContactBodyComponent } from './contact-body/contact-body.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactHeadComponent } from './contact-head/contact-head.component';
import { ContactRoutingModule } from './contact-routing.module';



@NgModule({
  declarations: [
    ContactComponent,
    ContactBodyComponent,
    ContactFormComponent,
    ContactHeadComponent
    ],
  imports: [
    CommonModule,
    ContactRoutingModule
  ],
  exports: [
    ContactComponent,
    ContactBodyComponent,
    ContactFormComponent,
    ContactHeadComponent
  ] 
})
export class ContactModule { }
