import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from 'src/app/service/place/place.service';

@Component({
  selector: 'app-places-details',
  templateUrl: './places-details.page.html',
  styleUrls: ['./places-details.page.scss'],
})
export class PlacesDetailsPage implements OnInit {

  public place: any;
  public category:any;
  id:string;
  constructor(private activatedRoute: ActivatedRoute, private servicePlace:PlaceService) {
    this.place={};
   }

  ngOnInit() {
    this.id=this.activatedRoute.snapshot.paramMap.get('id');

    if(parseInt(this.activatedRoute.snapshot.paramMap.get('id')) > 0){
      let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
      console.log(id);
      this.servicePlace.getById(id).subscribe((res: any) => {
        console.log("Obtenido ID ",res.categoria.nombre);
        this.category=res.categoria.nombre;
        this.place = res;        
      })
    }
  }

}
