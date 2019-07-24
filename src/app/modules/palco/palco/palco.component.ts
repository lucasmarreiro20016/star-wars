import { Component, OnInit } from '@angular/core';
import { PalcoService } from '../palco.service';
import { Planet } from 'src/app/shared/models/planet';
import { Film } from 'src/app/shared/models/film';

@Component({
  selector: 'app-palco',
  templateUrl: './palco.component.html',
  styleUrls: ['./palco.component.css']
})
export class PalcoComponent implements OnInit {
  isCarregando: boolean = true;

  buttonMessage: string = 'Exibir a resposta';
  respost: boolean = false;
  respostMessage: string = 'Planet Name';
  max = 61;
  listIds: Array<number> = [];
  planet: Planet = new Planet();
  films: Array<Film> = new Array<Film>();

  constructor(private _palcoService: PalcoService) { }

  ngOnInit() {
    this.getPlanet();
  }

  getPlanet() {
    this.planet = new Planet();
    this.films = new Array<Film>();
    this.isCarregando = true;

    let id = this.getRandom();

    this._palcoService.getPlanet(id).subscribe((data: Planet) => {
      this.planet = data;
      if (
        this.planet.name !== 'unknown' ||
        (this.planet.population !== 'unknown'
          && this.planet.climate !== 'unknown'
          && this.planet.terrain !== 'unknown'
        )) {
        this.planet.films.forEach(element => {
          let url = this.getLink(element);
          this.getFilms(url);
        });
      } else {
        this.getPlanet();
      }
      this.isCarregando = false;
    });
  }

  getFilms(url) {
    this._palcoService.getFilms(url).subscribe((data: Film) => {
      this.films.push(data);
    });
  }

  getLink(link: string) {
    let url = link.split('https://swapi.co/api/');
    return url[1];
  }

  getRandom() {
    let num = Math.floor(Math.random() * this.max + 1);
    let equals = false;
    if (this.listIds.length > 0) {
      this.listIds.forEach(element => {
        if (num === element) {
          equals = true;
        }
      });
      if (equals) {
        this.getRandom();
      } else {
        this.listIds.push(num)
      }
    } else {
      this.listIds.push(num);
    }
    return num;
  }

  getMax() {
    if (this.listIds.length < 61) {
      return true;
    } else {
      return false;
    }
  }

  onChangeRespost() {
    this.respost = !this.respost

    if (this.respost) {
      this.respostMessage = this.planet.name;
      this.buttonMessage = "Próxima planeta";
    } else {
      this.getPlanet();
      this.respostMessage = "Planet Name";
      this.buttonMessage = "Exibir a resposta";
    }
  }
}
