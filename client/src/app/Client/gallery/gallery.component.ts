import { Component, OnInit } from '@angular/core';
import { ClientService } from 'src/app/_services/client.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  gal:any=[];
  constructor(
    private _service: ClientService
  ) { }

  ngOnInit(): void {
    this._service.getGallery()
      .subscribe((res)=>{
        this.gal=res;
      });
  }

}
