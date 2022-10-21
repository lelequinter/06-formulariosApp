import { Component } from '@angular/core';

interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}
@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: 'Fernando',
    favoritos: [
      { id: 1, nombre: 'SlugTerra' },
      { id: 2, nombre: 'Gta V' },
      { id: 3, nombre: 'Red Dead Redention' },
    ]
  }

  guardar() {
    console.log('form posted');

  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index, 1);
  }

}
