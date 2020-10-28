import { Component, OnInit } from '@angular/core';
//import {HttpClient, HttpClientModule} from '@angular/common/http'
import { PublicService } from 'src/app/services/public.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

userList: any[] = [];

  constructor(private user: PublicService) { 
    this.user.getRandomUser()
      .subscribe((data: any) => {
        console.log('Datos de los trabajadores', data);
        this.userList = data.results;
      });
  }

  ngOnInit(): void {
  }

}
