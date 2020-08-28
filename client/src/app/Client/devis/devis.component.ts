import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../../_services/client.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-devis',
  templateUrl: './devis.component.html',
  styleUrls: ['./devis.component.scss']
})
export class DevisComponent implements OnInit {
  formDevis :FormGroup;
  formTel : FormGroup;
  tel:string ;
  serv:string;

  constructor(
    private _service : ClientService,
    private  _fb: FormBuilder,
  ) { }

  ngOnInit(): void {

    this.formDevis = this._fb.group({
      largeur:  ['', [Validators.required, Validators.minLength(3)]],
      hauteur:  ['', [Validators.required, Validators.email]],
      quantite:  ['', [Validators.required]]
      //tel:  ['', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.minLength(8),Validators.maxLength(8)]],
    });

  }
  setTel(tel:string){
    this.tel=tel;
  }
  setServ(service:string){
    this.serv=service;
  }
  send(){
    const devis = new FormData();
    devis.append('largeur', this.formDevis.get('largeur').value);
    devis.append('hauteur', this.formDevis.get('largeur').value);
    devis.append('quantite', this.formDevis.get('quantite').value);
    devis.append('tel',this.tel);
    devis.append('service',this.serv);
    this._service.sendDevis(devis)
    .subscribe(res=>{
      console.log(res);
      swal.fire(
        'Merci !',
        'Nous avons récus votre message!',
        'success'
      );
      this.formDevis.reset();
    });
  }


}
