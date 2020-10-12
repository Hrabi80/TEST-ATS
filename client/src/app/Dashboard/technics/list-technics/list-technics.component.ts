import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../_services/admin.service'
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-list-technics',
  templateUrl: './list-technics.component.html',
  styleUrls: ['./list-technics.component.scss']
})
export class ListTechnicsComponent implements OnInit {
  res: any=[];
  id:string;
  constructor(
    private _service : AdminService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
   
    this._service.GetTechs(this.id)
      .subscribe((res)=>{
        this.res=res;
        console.log("liste des techniques : ",res);
      });
  }

}
