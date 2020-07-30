import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { MessagesComponent } from './messages/messages.component';

const routes: Routes = [
  
    
    {
      path:'',
      component:NavComponent,
      children: [
        {
          path: 'messageList',
          component: MessagesComponent,   
        },
      ]
    }

  ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashRoutingModule {}