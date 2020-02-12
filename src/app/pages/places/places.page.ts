import { Component, OnInit } from '@angular/core';
import { PlaceService } from 'src/app/service/place/place.service';
import { ActivationEnd, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
})
export class PlacesPage implements OnInit {

  places:any[];
  placesFilter:any[];
  id:number;
  constructor(private placeService:PlaceService, private activatedRoute:ActivatedRoute) { }

  ngOnInit() {
    this.places = [];
    this.id=parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getAllPlaces();

  }

  getAllPlaces(refresher?) {
    
    if(parseInt(this.activatedRoute.snapshot.paramMap.get('id')) > 0){
      this.placeService.getAllPlaces()
      .subscribe((res: any) => {
        this.places = res.filter( e => e.categoria.id===this.id);
      });
    }
    
    /**/
      if(refresher){
        setTimeout(() => {
          console.log('Async operation has ended');
          refresher.target.complete();
        }, 2000);
      }
    }

}
