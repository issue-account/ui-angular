import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CabinetService {

  constructor() { }

  getHistory(){
    let url = environment.apiUrl + '/history'
    return url 
    // return this.http.post(url,{test: user })
  }
}
