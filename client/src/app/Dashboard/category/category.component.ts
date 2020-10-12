import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder , FormControl} from '@angular/forms';
import { AdminService } from '../../_services/admin.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  form:FormGroup;
  technique : any=[];
  constructor(
    private fb : FormBuilder,
    private _service : AdminService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: new FormControl(''),
      description: new FormControl('')
    });

    this._service.getAllCategories()
    .subscribe((res)=>{
      console.log(res);
      this.technique = res;
     })
  }


  newCategory(){
    this._service.addCategory(this.form.value)
    .subscribe((res)=>{
      console.log(res);
      swal.fire(
        'Ajouter !',
        'Une nouvelle categorie des services est ajouté.',
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
      title: 'Vous etes sur de supprimer ce type de service?',
      text: 'Tout les techniques relies avec ce service vont etre supprimer aussi !',
      showCancelButton: true,
      confirmButtonColor: '#049F0C',
      cancelButtonColor:'#ff0000',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it',
    }).then((res) => {
      if (res.value) {
        this._service.deleteCategory(id).subscribe(
          data => {
            console.log(data);
            swal.fire(
              'Deleted!',
              'Ce service est supprimé.',
              'success'
            );
            const index = this.technique.findIndex(x => x.id ===id);
              this.technique.splice(index, 1);
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
