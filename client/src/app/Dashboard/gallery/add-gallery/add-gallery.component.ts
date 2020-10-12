import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , FormControl, Validators} from '@angular/forms';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { AdminService } from 'src/app/_services/admin.service';
@Component({
  selector: 'app-add-gallery',
  templateUrl: './add-gallery.component.html',
  styleUrls: ['./add-gallery.component.scss']
})
export class AddGalleryComponent implements OnInit {
  form : FormGroup;
  progress: number = 0;
  constructor(
    private fb : FormBuilder,
    private _service: AdminService
  ) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      title: ['',[Validators.required]],
      description :['',[Validators.required]],
      photo: [null],
    })
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      photo: file
    });
    this.form.get('photo').updateValueAndValidity()
  }

  addGallery(){
    var formData: any = new FormData();
    formData.append("title", this.form.get('title').value);
    formData.append("description", this.form.get('description').value);
    formData.append("photo", this.form.get('photo').value);

    this._service.addGallery(formData)
      .subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Sent:
              console.log('Request has been made!');
              break;
            case HttpEventType.ResponseHeader:
              console.log('Response header has been received!');
              break;
            case HttpEventType.UploadProgress:
              this.progress = Math.round(event.loaded / event.total * 100);
              console.log(`Uploaded! ${this.progress}%`);
              break;
            case HttpEventType.Response:
              console.log('product successfully created!', event.body);
              setTimeout(() => {
                this.progress = 0;
              }, 1500);

        }
    })
  }

}
