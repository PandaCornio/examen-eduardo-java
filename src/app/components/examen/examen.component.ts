import { Component, OnInit } from '@angular/core';
import { MapsService } from '../../services/maps.service';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styleUrls: ['./examen.component.css']
})
export class ExamenComponent implements OnInit {

  lat: number = -23.8779431;
  lng: number = -49.8046873;
  zoom: number = 15;

  page = 1;
  pageSize = 8;

  items:any = [];

  constructor(private maps: MapsService) {
    this.callService();
  }

  ngOnInit(): void {
  }

  callService(){
    this.maps.getCoordenadas().subscribe(
      res => this.processData(res),
      err => console.log(err)
    );
  }

  processData(obj:any){
    this.lat = obj[obj.length - 1].latitud;
    this.lng = obj[obj.length - 1].longitud;
    this.items = obj;
  }

  changeLocation(obj:any){
    this.lat = obj.latitud;
    this.lng = obj.longitud;
  }

}
