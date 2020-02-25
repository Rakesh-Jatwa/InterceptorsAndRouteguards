import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {


  constructor(private router: Router, private http: HttpClient) { }
  isPerson() {
    return true;
  }

  fetch() {
    return this.http.get('https://jsonplaceholder.typicode.com/todos/1')
  }

}
