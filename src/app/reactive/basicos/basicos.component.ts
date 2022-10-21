import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  miFormulario: FormGroup = new FormGroup({
    nombre: new FormControl('Rtx 4080ti')
  });

  constructor() { }

  ngOnInit(): void {
  }

}
