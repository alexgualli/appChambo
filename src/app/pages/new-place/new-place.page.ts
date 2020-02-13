import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category/category.service';
import { NavController } from '@ionic/angular';
import { PlacesPage } from '../places/places.page';
import Place from '../entity/place';

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.page.html',
  styleUrls: ['./new-place.page.scss'],
})
export class NewPlacePage implements OnInit {

  place:Place=new Place();
  id:any;
  categories:any[];
  constructor(private pl:PlacesPage,private nav:NavController,private categoryService:CategoryService) {
    this.categories=[];
    
   }
   
  ngOnInit() {
    this.findCategories();    
  }

  


  findCategories(){
    this.categoryService.getAllCategories()
      .subscribe((res: any) => {
        this.categories = res
        console.log(" OBTENIDO ",this.categories);
      })
  }

  addPlace(){

  }

}
