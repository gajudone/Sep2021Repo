import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from 'projects/first-app/src/app/app.component';
import { LoginGuard } from 'projects/second-app/login.guard';
import { HomeChildComponent } from './home-child/home-child.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path:'', redirectTo:'/home/HomeChild',pathMatch:'full'},
  {path:'home', component:HomeComponent,  },
  {path:'home/:id/:name', component:HomeComponent},
  {path:'NotFound', component: NotFoundComponent},
  {path:'**', redirectTo:'/NotFound',pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginGuard]
})
export class AppRoutingModule { }
