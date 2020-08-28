import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MessagesComponent } from './messages/messages.component';
import { ServiceComponent } from './service/service.component';
import { UpdateComponent } from './service/update/update.component';
import { AddProductComponent } from './Products/add-product/add-product.component';
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
          path: 'addProduct',
          component: AddProductComponent,   
        },
      ]
    }

  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashRoutingModule {}