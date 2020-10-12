import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder , FormGroup } from '@angular/forms';
import { AdminService } from 'src/app/_services/admin.service';
import { ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
@Component({
  selector: 'app-update2',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent2 implements OnInit {
  id:string;
  form : FormGroup;
  service : any=[];
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

     this._service.getCategory(this.id)
    .subscribe((res)=>{
      console.log("serviceX",res);
      this.service = res;
    });
  }

  update(){
    this._service.updateCategory(this.id,this.form.value)
    .subscribe((res)=>{
      console.log(res);
      swal.fire(
        'Mis à jour!',
        'Ce service est maintenant à ajour.',
        'success'
      )
    })
  }

}
