import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , FormControl, Validators} from '@angular/forms';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { AdminService } from 'src/app/_services/admin.service';
@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  form : FormGroup;
  progress: number = 0;
  categories: any=[];
  constructor(
    private fb : FormBuilder,
    private _service: AdminService
  ) { }

  ngOnInit(): void {
    this._service.getAllService()
      .subscribe((res)=>{
        this.categories = res;
      });

      this.form = this.fb.group({
        name: ['',[Validators.required]],
        cat: ['',[Validators.required]],
        description :['',[Validators.required]],
        photo: [null],
        p1: new FormControl(''),
        p2: new FormControl(''),
        p3: new FormControl(''),
        p4: new FormControl(''),
        p5: new FormControl(''),
        p6: new FormControl(''),
      })
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      photo: file
    });
    this.form.get('photo').updateValueAndValidity()
  }

  addProduct(){
    var formData: any = new FormData();
    formData.append("name", this.form.get('name').value);
    formData.append("cat", this.form.get('cat').value);
    formData.append("description", this.form.get('description').value);
    formData.append("photo", this.form.get('photo').value);
    formData.append("p1", this.form.get('p1').value);
    formData.append("p2", this.form.get('p2').value);
    formData.append("p3", this.form.get('p3').value);
    formData.append("p4", this.form.get('p4').value);
    formData.append("p5", this.form.get('p5').value);
    formData.append("p6", this.form.get('p6').value);

    this._service.addProduct(formData)
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
