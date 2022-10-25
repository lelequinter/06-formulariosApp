import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidatorsService } from '../../../shared/validators/validators.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorsSvc.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsSvc.emailPattern)]],
    username: ['', [Validators.required, this.validatorsSvc.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required, ]],
  },
  {
    validators: [ this.validatorsSvc.camposIguales('password', 'password2') ]
  }
  )

  constructor(private fb: FormBuilder, private validatorsSvc: ValidatorsService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'lele quinter',
      email: 'aslam@gmail.com',
      username: 'RedYel'
    })
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched
  }

  submitFormulario() {
    console.log(this.miFormulario.value);

    this.miFormulario.markAllAsTouched();
  }

}
