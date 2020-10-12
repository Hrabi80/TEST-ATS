import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , FormControl, Validators} from '@angular/forms';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { AdminService } from 'src/app/_services/admin.service';
@Component({
  selector: 'app-add-technic',
  templateUrl: './add-technic.component.html',
  styleUrls: ['./add-technic.component.scss']
})
export class AddTechnicComponent implements OnInit {
  form : FormGroup;
  progress: number = 0;
  categories: any=[];
  constructor(
    private fb : FormBuilder,
    private _service: AdminService
  ) { }

  ngOnInit(): void {
    this._service.getAllCategories()
      .subscribe((res)=>{
        this.categories = res;
      });

      this.form = this.fb.group({
        name: ['',[Validators.required]],
        cat: ['',[Validators.required]],
        description :['',[Validators.required]],
        photo: [null],
        t1: new FormControl(''),
        t2: new FormControl(''),
        t3: new FormControl(''),
        t4: new FormControl(''),
        t5: new FormControl(''),
        t6: new FormControl(''),
      });
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.form.patchValue({
      photo: file
    });
    this.form.get('photo').updateValueAndValidity()
  }

  addTech(){
    var formData: any = new FormData();
    formData.append("name", this.form.get('name').value);
    formData.append("cat", this.form.get('cat').value);
    formData.append("description", this.form.get('description').value);
    formData.append("photo", this.form.get('photo').value);
    formData.append("t1", this.form.get('t1').value);
    formData.append("t2", this.form.get('t2').value);
    formData.append("t3", this.form.get('t3').value);
    formData.append("t4", this.form.get('t4').value);
    formData.append("t5", this.form.get('t5').value);
    formData.append("t6", this.form.get('t6').value);

    this._service.addTechnic(formData,this.form.get('cat').value)
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
