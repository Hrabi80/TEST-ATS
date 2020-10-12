import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder , FormGroup, FormsModule } from '@angular/forms';
import { AdminService } from 'src/app/_services/admin.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  id:string;
  form : FormGroup;
  serviceX : any=[];
  constructor(
    private fb: FormBuilder,
    private _service : AdminService,
    private route : ActivatedRoute
  ) { }

  ngOnInit(): void {
   this.id = this.route.snapshot.paramMap.get('id');
   console.log("id :",this.id);
   this.form=this.fb.group({
      name: new FormControl(''),
      description: new FormControl('')
    });

    this._service.getService(this.id)
    .subscribe((res)=>{
      console.log("serviceX",res);
      this.serviceX = res;
    })
  }

  update(){
    this._service.updateService(this.id,this.form.value)
    .subscribe((res)=>{
      console.log(res);
      swal.fire(
        'Mis à jour!',
        'Ce service service est  mis à ajour.',
        'success'
      )
    })
  }

}
