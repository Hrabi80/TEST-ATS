import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  constructor(private service : ProductService) { }
  products : any=[];
  page=0;
  limit=0;
  offset=0;
  pageSize= 100;
  ngOnInit(): void {
    this.service.getAllProductPagination(this.page,this.limit).then((res:any)=>{
      this.products = res.product;
    })
  }

  getPagtionation(event:any) {
    this.pageSize = event.pageSize;
    this.offset = event.pageIndex * event.pageSize;
    window.scroll(0, 0);
  }

}
