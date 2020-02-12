import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceService } from '../service.service';
@Injectable({
  providedIn: 'root'
})
export class PlaceService extends ServiceService{

  constructor(private http: HttpClient) {
    super('/places');
 }

 getAllPlaces() {
  const path = `${this.url}`;
  console.log(path);
  return this.http.get(path);
}

getById(id: number) {
  const path = `${this.url}/${id}`;
  return this.http.get(path);
}

}
