import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DayServiceService {

  constructor(private http: HttpClient) {
    this.getDataSet();
  }
  getDataSet(){
    return this.http.get('assets/days.json');
  }
}
