import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) { }

  getData = (val) => {
    return this.http.get(`https://api.github.com/search/users?q=${val}`);
  }
}
