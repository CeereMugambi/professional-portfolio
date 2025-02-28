import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const ContactModule = () => import('./contact/contact.module').then(x => x.ContactModule);
const AboutModule = () => import('./about/about.module').then(x => x.AboutModule);
const PortfolioModule = () => import('./portfolio/portfolio.module').then(x => x.PortfolioModule);


const routes: Routes = [
  { path: 'about', loadChildren: AboutModule },
  { path: 'portfolio', loadChildren: PortfolioModule },
  { path: 'contact', loadChildren: ContactModule },
  { path: 'home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', redirectTo: 'not-found' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
