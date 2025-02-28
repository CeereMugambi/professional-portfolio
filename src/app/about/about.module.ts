import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from './about/about.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { SkillsComponent } from './skills/skills.component';
import { FactsComponent } from './facts/facts.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { AboutRoutingModule } from './about-routing.module';



@NgModule({
  declarations: [
    AboutComponent,
    AboutMeComponent,
    SkillsComponent,
    FactsComponent,
    TestimonialsComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ],
  exports: [
    AboutComponent,
    AboutMeComponent,
    SkillsComponent,
    FactsComponent,
    TestimonialsComponent
  ]
})
export class AboutModule { }
