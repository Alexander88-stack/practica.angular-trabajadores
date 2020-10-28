import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PublicService {

  user = [];

  constructor(private http: HttpClient) { }
  getRandomUser()  {
    // const headers = new HttpHeaders({
    //   Authorization: 'Bearer iasdfaificasc'
    // });
     return this.http.get('https://randomuser.me/api/?results=50');

    //  .subscribe(( data: any) => {
    //    console.log('Datos trabajadores', data);
    //    this.user = data;
    //  })
    
      
    }
  
}

