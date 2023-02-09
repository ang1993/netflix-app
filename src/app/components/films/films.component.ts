import { Component, Input } from '@angular/core';
import { contentFilms } from './../../models/film-interface';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.scss']
})
export class FilmsComponent {

  @Input() public dramaFilms: contentFilms = {category: '', filmInfo:[]};
  @Input() public terrorFilms: contentFilms = {category: '', filmInfo:[]};
  @Input() public comediaFilms: contentFilms = {category: '', filmInfo:[]};
  @Input() public sciFi: contentFilms = {category: '', filmInfo:[]};
  @Input() public filmGallery!: contentFilms;
   
  }


