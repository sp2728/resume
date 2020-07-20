import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';


const routes: Routes = [
  { path: 'about', component:AboutComponent },
  {
    path:'', redirectTo:'about', pathMatch:'full'
  },
  {
    path:'contact', component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{anchorScrolling: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
