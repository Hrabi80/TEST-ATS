import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/_services/admin.service';
import { ClientService } from 'src/app/_services/client.service';

@Component({
  selector: 'app-list-gallery',
  templateUrl: './list-gallery.component.html',
  styleUrls: ['./list-gallery.component.scss']
})
export class ListGalleryComponent implements OnInit {
  gal: any=[];
  constructor(
    private Client :ClientService,
    private Admin: AdminService
  ) { }

  ngOnInit(): void {
    this.Client.getGallery()
    .subscribe((res)=>{
      this.gal=res;
    })
  }

}
