import { Injectable } from '@angular/core';
import { RestService } from '../../core/services/rest.service';

@Injectable({
  providedIn: 'root'
})
export class PalcoService {

  constructor(private rest: RestService) { }

  getPlanet(id: number) {
    return this.rest.get('planets/'+id+'/');
  }

  getFilms(url) {
    return this.rest.get(url);
  }

}
