import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MessagesComponent } from './messages/messages.component';
import { ServiceComponent } from './service/service.component';
import { CategoryComponent } from './category/category.component';
import { UpdateComponent } from './service/update/update.component';
import { UpdateComponent2 } from './category/update/update.component';
import { AddProductComponent } from './Products/add-product/add-product.component';
import { ListeComponent } from './Products/liste/liste.component';
import { AddTechnicComponent } from './technics/add-technic/add-technic.component';
import { ListTechnicsComponent } from './technics/list-technics/list-technics.component';
import { AddGalleryComponent } from './gallery/add-gallery/add-gallery.component';
import { ListGalleryComponent } from './gallery/list-gallery/list-gallery.component';
const routes: Routes = [
  
    
    {
      path:'',
      component:NavComponent,
      children: [
        {
          path: 'messageList',
          component: MessagesComponent,   
        },
        
        {
          path: 'service',
          component: ServiceComponent,   
        },
        {
          path: 'service/update/:id',
          component: UpdateComponent,   
        },
        {
          path: 'service/listProducts/:id',
          component: ListeComponent,   
        },
        {
          path: 'services/listTechnics/:id',
          component: ListTechnicsComponent,   
        },
        {
          path: 'addProduct',
          component: AddProductComponent,   
        },
        {
          path: 'addTechnic',
          component: AddTechnicComponent,   
        },
        {
          path: 'services',
          component: CategoryComponent,   
        },
        {
          path: 'services/update/:id',
          component: UpdateComponent2,   
        },
        {
          path: 'addGallery',
          component: AddGalleryComponent,   
        },
        {
          path: 'ListGallery',
          component: ListGalleryComponent,   
        },
      ]
    }

  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashRoutingModule {}