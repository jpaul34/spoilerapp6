import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pelicula-banner',
  templateUrl: './pelicula-banner.component.html',
  styleUrls: ['./pelicula-banner.component.css']
})
export class PeliculaBannerComponent implements OnInit {
  urlImagen = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTL_FOh_xn19xgXf_Uq5OK3WWzAmoVoZLHCO2vjFd4LKaxijU59eg';
  descripcionImagen = 'Imagen de la pelicula Tomb Raider';
  nombrePelicula = 'Tomb Raider';
  descripcionPelicula = 'Alicia vikander,Walton Googins';
  colorBoton = 'alert alert-primary';
  texto = '1';

  esEstreno = false;
  textoEstreno: string;
  claseEstreno: string;

  constructor() {
  }


  ngOnInit() {
    if (this.esEstreno) {
      this.textoEstreno = 'Estreno';
      this.claseEstreno = 'sa-color-estado-rosado';
    } else {
      this.textoEstreno = 'Proximamente';
      this.claseEstreno = 'sa-color-estado-amarillo';
    }
  }

  cambiarColor() {
    if (this.colorBoton === 'alert alert-primary') {
      this.texto = '2';
      this.colorBoton = 'alert alert-success';
    } else {
      if (this.colorBoton === 'alert alert-success') {
        this.texto = '3';
        this.colorBoton = 'alert alert-secundary';
      } else {
        if (this.colorBoton === 'alert alert-secundary') {
          this.colorBoton = 'alert alert-primary';
          this.texto = '4';
        }
      }
    }
  }
}
