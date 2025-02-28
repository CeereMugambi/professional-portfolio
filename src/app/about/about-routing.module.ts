import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { FactsComponent } from './facts/facts.component';
import { SkillsComponent } from './skills/skills.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';


const routes: Routes = [
    
       {path: 'about',component:AboutComponent},
       {path: 'about-me',component:AboutMeComponent},
       {path: 'facts',component:FactsComponent},
       {path: 'skills',component:SkillsComponent},
       {path: 'testimonials',component:TestimonialsComponent}   
    
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AboutRoutingModule { }