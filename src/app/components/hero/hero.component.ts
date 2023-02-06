import { Component, Input } from '@angular/core';
import { top10Series } from './../../models/film-interface';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {

  @Input() topSeries: top10Series = { titles: [] };

}
