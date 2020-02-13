import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/service/category/category.service';

@Component({
  selector: 'app-new-place',
  templateUrl: './new-place.page.html',
  styleUrls: ['./new-place.page.scss'],
})
export class NewPlacePage implements OnInit {

  categories:any[];
  constructor(private categoryService:CategoryService) {
    this.categories=[];
   }

  ngOnInit() {
    this.findCategories();
  }


  findCategories(){
    this.categoryService.getAllCategories().subscribe((res:any)=>{
      this.categories=res;
      console.log(this.categories);
    })
  }

  addPlace(){

  }

}
