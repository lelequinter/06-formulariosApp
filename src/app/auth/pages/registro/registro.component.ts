import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { ValidatorsService } from '../../../shared/validators/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorsSvc.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorsSvc.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorsSvc.noPuedeSerStrider], []],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required,]],
  },
    {
      validators: [this.validatorsSvc.camposIguales('password', 'password2')]
    }
  )

  constructor(private fb: FormBuilder,
    private validatorsSvc: ValidatorsService,
    private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'lele quinter',
      email: 'aslam@gmail.com',
      username: 'RedYel',
      password: '123456',
      password2: '123456'
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
