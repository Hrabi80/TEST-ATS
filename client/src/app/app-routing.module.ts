import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { WelcomeComponent } from './Client/welcome/welcome.component';
import { LoginComponent } from './Dashboard/login/login.component';
import { ContactComponent } from './Client/contact/contact.component';
import { NavComponent } from './Dashboard/nav/nav.component';
import { AuthGuard } from './_helper/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'welcome',
    pathMatch: 'full',
  },
  {
    path:'welcome',
    component:WelcomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path: 'dashboard',
    loadChildren: './Dashboard/dash.module#DashModule',
    canActivate : [AuthGuard]
  },
  /*
  {
    path:'dashboard',
    component:NavComponent,
    children: [
      {
        path: 'loc',
        component: LocationComponent,   
      },
    ]
  }
  */
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
