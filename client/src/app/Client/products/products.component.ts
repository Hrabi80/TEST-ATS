import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClientService } from 'src/app/_services/client.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  pro: any=[];
  id:string;
  constructor(
    private route : ActivatedRoute,
    private _service : ClientService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this._service.getProductByCategory(this.id)
      .subscribe((res)=>{
        this.pro=res;
      });
  }

}
