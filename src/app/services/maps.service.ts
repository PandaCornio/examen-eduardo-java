import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MapsService {

  constructor(private http: HttpClient) { }

  getCoordenadas(){
    return this.http.post('/api/obtieneCoordenadasXUsuario', { usuarioid:703021 })
  }

}
