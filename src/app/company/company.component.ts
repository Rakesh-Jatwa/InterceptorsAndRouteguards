import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(private service: UserServiceService) { }

  ngOnInit(): void {
    localStorage.setItem('localData', "localStorageData");
    sessionStorage.setItem('sessionData', "sessionStorageData");
    console.log(localStorage.getItem('localData'));
    console.log(sessionStorage.getItem('sessionData'));
  }
  fetch() {
    this.service.fetch().subscribe(res => {
      console.log(res);

    }, err => {
      console.log(err);

    })
  }

}
