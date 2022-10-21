import { Component } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  // miFormulario: FormGroup = new FormGroup({
  //   nombre     : new FormControl('Rtx 4080ti'),
  //   precio     : new FormControl(1500),
  //   existencias: new FormControl(3),
  // });

  miFormulario: FormGroup = this.fb.group({
    nombre: ['RTX 4080ti'],
    precio: [3000],
    existencias: [12],
  })

  constructor(private fb: FormBuilder) { }


}
