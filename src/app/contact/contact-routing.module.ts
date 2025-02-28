import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactModule } from './contact.module';
import { ContactBodyComponent } from './contact-body/contact-body.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactHeadComponent } from './contact-head/contact-head.component';


const routes: Routes = [
    
       {path: 'contact',component:ContactModule},
       {path: 'contact-body',component:ContactBodyComponent},
       {path: 'contact-form',component:ContactFormComponent},
       {path: 'contact-head',component:ContactHeadComponent},
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContactRoutingModule { }