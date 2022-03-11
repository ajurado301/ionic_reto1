import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';
import { LibrosService } from '../shared/libros.service';
import { NotificacionService } from '../shared/notificacion.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.page.html',
  styleUrls: ['./formulario.page.scss'],
})
export class FormularioPage implements OnInit {

  libro: Libro;

  constructor(private ls: LibrosService) {
    this.libro = new Libro(null, null, null, null, null, null)
    this.libro.id_usuario = 1;
   }

  ngOnInit() {
  }

  agregarLibro(): void {
    this.ls.add(this.libro)
    .subscribe((respuesta: any) => {
      alert(respuesta.message);
    }, (err) => {
      alert(err.error.message);
    })
  }
  
  modificarLibro(): void {
    this.ls.edit(this.libro)
    .subscribe((respuesta: any) => {
      alert(respuesta.message);              
    }, (err) => {
      alert(err.error.message);
    })
  }

  borrarLibro(id_libro: number): void {
    this.ls.delete(id_libro)
    .subscribe((respuesta: any) => {
      alert(respuesta.message);
    }, (err) => {
      alert(err.error.message);
    })
  }
}
