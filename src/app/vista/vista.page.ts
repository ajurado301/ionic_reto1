import { Component, OnInit } from '@angular/core';
import { Libro } from '../models/libro';
import { LibrosService } from '../shared/libros.service';

@Component({
  selector: 'app-vista',
  templateUrl: './vista.page.html',
  styleUrls: ['./vista.page.scss'],
})
export class VistaPage implements OnInit {

  id_libro: number;
  libros: Libro[];

  constructor(private ls: LibrosService) {
    this.id_libro = null;
    this.libros = [];
   }

  ngOnInit() {
  }

  buscarLibro(id_libro: number): void {
    
    if(!id_libro) {
      this.ls.getAll()
      .subscribe((respuesta: any) => {
        this.libros = respuesta.resultado;
        alert(respuesta.message);
      }, (err) => {
        alert(err.error.message)
      })
    } else {
      this.ls.getOne(id_libro)
      .subscribe((respuesta: any) => {
        if (respuesta.ok) {
          this.libros = respuesta.resultado;
        } else {
          this.libros = [];
        }
        alert(respuesta.message);
      }, (err) => {
        alert(err.error.message)
      })
    }
  }

}
