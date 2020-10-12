import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.scss']
})
export class ListeComponent implements OnInit {
  res: any=[];
  id:string;

  constructor(
    private _service : AdminService,
    private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
   
    this._service.GetProductByService(this.id)
      .subscribe((res)=>{
        this.res=res;
        console.log("liste produit : ",res);
      });

  }

}
