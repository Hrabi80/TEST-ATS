import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { WelcomeComponent } from './Client/welcome/welcome.component';
import { LoginComponent } from './Dashboard/login/login.component';
import { ContactComponent } from './Client/contact/contact.component';
import { NavComponent } from './Dashboard/nav/nav.component';
import { AuthGuard } from './_helper/auth.guard';
import { DevisComponent } from './Client/devis/devis.component';
import { ProductsComponent } from './Client/products/products.component';
import { TechnicsComponent } from './Client/technics/technics.component';
import { GalleryComponent } from './Client/gallery/gallery.component';

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
    path:'devis',
    component:DevisComponent
  },
  {
    path:'produits/:id',
    component:ProductsComponent
  },
  {
    path:'techniques/:id',
    component:TechnicsComponent
  },
  {
    path: 'dashboard',
    loadChildren: './Dashboard/dash.module#DashModule',
    canActivate : [AuthGuard]
  },
  {
    path:'galerie',
    component:GalleryComponent
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
