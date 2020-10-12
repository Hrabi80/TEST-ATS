import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/_services/client.service';
@Component({
  selector: 'app-technics',
  templateUrl: './technics.component.html',
  styleUrls: ['./technics.component.scss']
})
export class TechnicsComponent implements OnInit {
  pro: any=[];
  id:string;
  constructor(
    private route : ActivatedRoute,
    private _service : ClientService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this._service.getTechnicsByCategory(this.id)
      .subscribe((res)=>{
        this.pro=res;
      });
  }

}
