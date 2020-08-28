import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , FormControl} from '@angular/forms';
import { AdminService } from '../../_services/admin.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent implements OnInit {
  form:FormGroup;
  verre : any=[];


  constructor(
    private fb : FormBuilder,
    private _service : AdminService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl(''),
      description: new FormControl('')
    });

    this._service.getAllService()
    .subscribe((res)=>{
      console.log(res);
      this.verre = res;
     })
  }

  newService(){
    this._service.addService(this.form.value)
    .subscribe((res)=>{
      console.log(res);
      swal.fire(
        'Ajouter !',
        'Une nouvel service est ajouté.',
        'success'
      );
      setTimeout(()=>{                          
        location.reload()
   }, 3200);
    });
  }

  delete(id){
    swal.fire({
     // type:'warning',
      title: 'Vous etes sur de supprimer ce service?',
      text: 'Tout les accesoir relies avec ce service vont etre supprimer aussi !',
      showCancelButton: true,
      confirmButtonColor: '#049F0C',
      cancelButtonColor:'#ff0000',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((res) => {
      if (res.value) {
        this._service.deleteService(id).subscribe(
          data => {
            console.log(data);
            swal.fire(
              'Deleted!',
              'Ce service est supprimé.',
              'success'
            );
            const index = this.verre.findIndex(x => x.id ===id);
              this.verre.splice(index, 1);
          });
      }else{
        swal.fire(
          'Canceled!',
          'Cette operation est annulée.',
          'success'
        )
      }
    });
  }

  
 
}
