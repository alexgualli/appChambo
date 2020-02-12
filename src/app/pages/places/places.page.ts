import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/app/service/place/place.service';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places:any[];
  test:any[];
  placesFilter:any[];

  constructor(private placeService:PlaceService) { }

  ngOnInit() {
    this.places = [];
    this.test=[];
    this.getAllPlaces();
  }
  

  getAllPlaces(refresher?) {
    this.placeService.getAllPlaces()
      .subscribe((res: any) => {
        this.places = res
        this.test=res.cartegoria.id
        this.placesFilter = res
        console.log(" OBTENIDO ",this.test);
      })
      if(refresher){
        setTimeout(() => {
          console.log('Async operation has ended');
          refresher.target.complete();
        }, 2000);
      }
    }

}
