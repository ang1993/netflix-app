import { Component, Input } from '@angular/core';
import { contentFilms } from './../../models/film-interface';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {

  @Input() dramaFilms: contentFilms = {category: '', filmInfo:[]};
  @Input() terrorFilms: contentFilms = {category: '', filmInfo:[]};
  @Input() comediaFilms: contentFilms = {category: '', filmInfo:[]};
  @Input() sciFi: contentFilms = {category: '', filmInfo:[]};
  @Input() filmGallery: any;
   
  }


