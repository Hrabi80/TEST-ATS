import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ClientService } from '../../_services/client.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  formContact :FormGroup;
  
  constructor(
              private _service : ClientService,
              private  _fb: FormBuilder,) 
            { }

  ngOnInit(): void {

    this.formContact = this._fb.group({
      name:  ['', [Validators.required, Validators.minLength(3)]],
      mail:  ['', [Validators.required, Validators.email]],
      tel:  ['', [Validators.required, Validators.pattern("^[0-9]*$"),Validators.minLength(8),Validators.maxLength(8)]],
      message:  ['', [Validators.required, Validators.minLength(6)]],    
    });

  }

  newContact(){
   this._service.addContact(this.formContact.value)
    .subscribe(res=>{
      console.log(res);
      swal.fire(
        'Merci !',
        'Nous avons récus votre message!',
        'success'
      );
      this.formContact.reset();
    });
    
  }

  

}
