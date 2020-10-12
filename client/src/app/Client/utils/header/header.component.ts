import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/_services/client.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  verre :any=[];
  techniques : any=[];
  constructor(private _service : ClientService) { }

  ngOnInit(): void {
    this._service.getAllService()
      .subscribe((res)=>{
        this.verre=res;
        console.log(res);
      });
    
    this._service.getAllTechnics()
      .subscribe((res)=>{
        this.techniques=res;
      });
    
  }

}
