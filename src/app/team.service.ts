import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teammumbers: any[];
  teamUrl = '../assets/data.json';

  constructor(private httpClient: HttpClient) {
   }
   public getTeam(): Observable<any> {
    return this.httpClient.get(this.teamUrl);
  }
// public postTeam(teammumbers){
// this.httpClient.post(this.teamUrl, teammumbers);
//}

}
