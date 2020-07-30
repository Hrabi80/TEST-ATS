import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../_services/client.service';
@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages:object=[];
  constructor(private _service : ClientService) { }

  ngOnInit(): void {
    this._service.getAllContact()
    .subscribe((res)=>{
      console.log(res);
      this.messages=res;
    })
  }

}
