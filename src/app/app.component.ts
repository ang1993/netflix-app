import { contentFilms, top10Series } from './models/film-interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'netflix-app';
  public dramaFilms: contentFilms;
  public terrorFilms: contentFilms;
  public comediaFilms: contentFilms;
  public sciFi: contentFilms;
  public topSeries: top10Series;

  constructor() {

    this.dramaFilms = { 
      category: 'Elige tu drama',
      filmInfo: [
        {
          title: '1917',
          type: 'drama',
          minutes: Math.floor(Math.random() * (210 - 120) + 120),
          image: {
            src: 'assets/Drama/1917.webp',
            alt: '1917'
        }},
        {
          title: 'Arrival',
          type: 'drama',
          minutes: Math.floor(Math.random() * (210 - 120) + 120),
          image: {
            src: 'assets/Drama/arrival.webp',
            alt: 'arrival'
        }},
        {
          title: 'El club de la lucha',
          type: 'drama',
          minutes: Math.floor(Math.random() * (210 - 120) + 120),
          image: {
            src: 'assets/Drama/clublucha.webp',
            alt: 'El Club de la lucha'
        }},
        {
          title: 'Corazones de acero',
          type: 'drama',
          minutes: Math.floor(Math.random() * (210 - 120) + 120),
          image: {
            src: 'assets/Drama/corazones.webp',
            alt: 'Corazones'
        }},
        {
          title: 'Culpable',
          type: 'drama',
          minutes: Math.floor(Math.random() * (210 - 120) + 120),
          image: {
            src: 'assets/Drama/culpable.jpg',
            alt: 'Culpable'
        }},
        {
          title: 'La milla verde',
          type: 'drama',
          minutes: Math.floor(Math.random() * (210 - 120) + 120),
          image: {
            src: 'assets/Drama/millaverde.webp',
            alt: 'Millaverde'
        }},
        {
          title: 'Náufrago',
          type: 'drama',
          minutes: Math.floor(Math.random() * (210 - 120) + 120),
          image: {
            src: 'assets/Drama/naufrago.webp',
            alt: 'Naufrago'
        }},
        {
          title: 'No es país para viejos',
          type: 'drama',
          minutes: Math.floor(Math.random() * (210 - 120) + 120),
          image: {
            src: 'assets/Drama/noespais.webp',
            alt: 'Naufrago'
        }},
        {
          title: 'Salvar al soldado Ryan',
          type: 'drama',
          minutes: Math.floor(Math.random() * (210 - 120) + 120),
          image: {
            src: 'assets/Drama/salvaralsoldado.webp',
            alt: 'Salvar al soldado Ryan'
        }},
        {
          title: 'Scarface',
          type: 'drama',
          minutes: Math.floor(Math.random() * (210 - 120) + 120),
          image: {
            src: 'assets/Drama/scarface.webp',
            alt: 'Scarface'
        }},
        {
          title: 'La lista de Schindler',
          type: 'drama',
          minutes: Math.floor(Math.random() * (210 - 120) + 120),
          image: {
            src: 'assets/Drama/schindler.webp',
            alt: 'La lista de Schindler'
        }},
        {
          title: 'La sombra del diablo',
          type: 'drama',
          minutes: Math.floor(Math.random() * (210 - 120) + 120),
          image: {
            src: 'assets/Drama/sombradiablo.webp',
            alt: 'Sombra diablo'
        }},
        {
          title: 'Eñ único superviviente',
          type: 'drama',
          minutes: Math.floor(Math.random() * (210 - 120) + 120),
          image: {
            src: 'assets/Drama/unicosuperviviente.webp',
            alt: 'Unico superviviente'
        }},
      ]
      }

      this.terrorFilms = { 
        category: 'Las más terroríficas',
        filmInfo: [
          {
            title: 'El apóstol',
            type: 'terror',
            minutes: Math.floor(Math.random() * (210 - 120) + 120),
            image: {
              src: 'assets/Terror/apostol.jpg',
              alt: 'el apostol'
          }},
          {
            title: 'La calle del terror',
            type: 'terror',
            minutes: Math.floor(Math.random() * (210 - 120) + 120),
            image: {
              src: 'assets/Terror/calleterror.jpg',
              alt: 'La calle del terror'
          }},
          {
            title: 'Infierno bajo el agua',
            type: 'terror',
            minutes: Math.floor(Math.random() * (210 - 120) + 120),
            image: {
              src: 'assets/Terror/infiernoagua.webp',
              alt: 'infierno bajo el agua'
          }},
          {
            title: 'Insidious 2',
            type: 'terror',
            minutes: Math.floor(Math.random() * (210 - 120) + 120),
            image: {
              src: 'assets/Terror/insidious2.webp',
              alt: 'insidious 2'
          }},
          {
            title: 'Life',
            type: 'terror',
            minutes: Math.floor(Math.random() * (210 - 120) + 120),
            image: {
              src: 'assets/Terror/life.webp',
              alt: 'Life'
          }},
          {
            title: 'Malasaña 32',
            type: 'terror',
            minutes: Math.floor(Math.random() * (210 - 120) + 120),
            image: {
              src: 'assets/Terror/malasana.webp',
              alt: 'Malasaña 32'
          }},
          {
            title: 'Múltiple',
            type: 'terror',
            minutes: Math.floor(Math.random() * (210 - 120) + 120),
            image: {
              src: 'assets/Terror/multiple.webp',
              alt: 'Múltiple'
          }},
          {
            title: 'Reflejos',
            type: 'terror',
            minutes: Math.floor(Math.random() * (210 - 120) + 120),
            image: {
              src: 'assets/Terror/reflejos.webp',
              alt: 'Reflejos'
          }},
        ]
        }


        this.comediaFilms = { 
          category: '¿Mejor una comedia?',
          filmInfo: [
            {
              title: 'Casi 300',
              type: 'comedia',
              minutes: Math.floor(Math.random() * (210 - 120) + 120),
              image: {
                src: 'assets/Comedia/casi300.webp',
                alt: 'el apostol'
            }},
            {
              title: 'Cazafantasmas',
              type: 'comedia',
              minutes: Math.floor(Math.random() * (210 - 120) + 120),
              image: {
                src: 'assets/Comedia/cazafantasmas.webp',
                alt: 'La calle del terror'
            }},
            {
              title: 'El gran dictador',
              type: 'comedia',
              minutes: Math.floor(Math.random() * (210 - 120) + 120),
              image: {
                src: 'assets/Comedia/dictador.webp',
                alt: 'El gran dictador'
            }},
            {
              title: 'Érase una vez en Hollywood',
              type: 'comedia',
              minutes: Math.floor(Math.random() * (210 - 120) + 120),
              image: {
                src: 'assets/Comedia/erasehollywood.webp',
                alt: 'Érase una vez en Hollywood'
            }},
            {
              title: 'Regreso al futuro',
              type: 'comedia',
              minutes: Math.floor(Math.random() * (210 - 120) + 120),
              image: {
                src: 'assets/Comedia/regresofuturo.webp',
                alt: 'Regreso al futuro'
            }},
            {
              title: 'Scary Movie 3',
              type: 'comedia',
              minutes: Math.floor(Math.random() * (210 - 120) + 120),
              image: {
                src: 'assets/Comedia/scarymovie3.webp',
                alt: 'Scary Movie 3'
            }},
            {
              title: 'Los padres de ella',
              type: 'comedia',
              minutes: Math.floor(Math.random() * (210 - 120) + 120),
              image: {
                src: 'assets/Comedia/padresella.webp',
                alt: 'Los padres de ella'
            }},
            {
              title: 'Rick and Morty',
              type: 'comedia',
              minutes: Math.floor(Math.random() * (210 - 120) + 120),
              image: {
                src: 'assets/Comedia/rickandmorty.webp',
                alt: 'Rick and Morty'
            }},
          ]
          }

          this.topSeries = {
            titles: [
              { number: 1, image: {src: 'assets/Top10/1-papel.webp', alt: 'La casa de papel'} },
              { number: 2, image: {src: 'assets/Top10/2-reina.webp', alt: 'La casa de papel'} },
              { number: 3, image: {src: 'assets/Top10/3-titanes.webp', alt: 'La casa de papel'} },
              { number: 4, image: {src: 'assets/Top10/4-lostinspace.webp', alt: 'La casa de papel'} },
              { number: 5, image: {src: 'assets/Top10/5-dondecaben.webp', alt: 'La casa de papel'} },
              { number: 6, image: {src: 'assets/Top10/1-papel.webp', alt: 'La casa de papel'} },
              { number: 7, image: {src: 'assets/Top10/2-reina.webp', alt: 'La casa de papel'} },
              { number: 8, image: {src: 'assets/Top10/3-titanes.webp', alt: 'La casa de papel'} },
              { number: 9, image: {src: 'assets/Top10/4-lostinspace.webp', alt: 'La casa de papel'} },
              { number: 10, image: {src: 'assets/Top10/5-dondecaben.webp', alt: 'La casa de papel'} },
              ]
          }

          this.sciFi = {
            category: 'Otros mundos',
            filmInfo: [
              {
              title: 'El 6º día',
              type: 'sci-fi',
              minutes: Math.floor(Math.random() * (210 - 120) + 120),
              image: {
                src: 'assets/Sci-fi/6dia.webp',
                alt:'El 6 dia'
              }},
              {
                title: '12 Monos',
                type: 'sci-fi',
                minutes: Math.floor(Math.random() * (210 - 120) + 120),
                image: {
                  src: 'assets/Sci-fi/12monos.webp',
                  alt:'12 Monos'
                }},
                {
                  title: 'After Earth',
                  type: 'sci-fi',
                  minutes: Math.floor(Math.random() * (210 - 120) + 120),
                  image: {
                    src: 'assets/Sci-fi/afterearth.webp',
                    alt:'After Earth'
                  }},
                  {
                    title: 'The Cloverfield Paradox',
                    type: 'sci-fi',
                    minutes: Math.floor(Math.random() * (210 - 120) + 120),
                    image: {
                      src: 'assets/Sci-fi/colverparadox.jpg',
                      alt:'cloverfield'
                    }},
                    {
                      title: 'Deep Impact',
                      type: 'sci-fi',
                      minutes: Math.floor(Math.random() * (210 - 120) + 120),
                      image: {
                        src: 'assets/Sci-fi/deepimpact.webp',
                        alt:'Deep Impact'
                      }},
                      {
                        title: 'Doom',
                        type: 'sci-fi',
                        minutes: Math.floor(Math.random() * (210 - 120) + 120),
                        image: {
                          src: 'assets/Sci-fi/doom.webp',
                          alt:'Foom'
                        }},
                      {
                          title: 'Ghost in the shell',
                          type: 'sci-fi',
                          minutes: Math.floor(Math.random() * (210 - 120) + 120),
                          image: {
                            src: 'assets/Sci-fi/gits.webp',
                            alt:'gits'
                          }},
                          {
                            title: 'Star trek',
                            type: 'sci-fi',
                            minutes: Math.floor(Math.random() * (210 - 120) + 120),
                            image: {
                              src: 'assets/Sci-fi/startrek.webp',
                              alt:'star trek'
                            }},
            ]
          }
    }
}

