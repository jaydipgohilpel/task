import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  configUrl = "";

  constructor(private apiData: HttpClient) {
  }

  authentication(personData: any): Observable<any> {
    this.configUrl = 'https://api-touku.angelium.net/api/xchat/api-token-auth-touku/';
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(personData);
    return this.apiData.post(this.configUrl, body, { 'headers': headers });
  }

  getApiDataWithParameter(): Observable<any> {
    this.configUrl = "https://jsonplaceholder.typicode.com/comments?postId=1";
    let postIdParams = new HttpParams().set("postId", "1").set("id", "2");
    postIdParams = new HttpParams().set("id", "2");
    return this.apiData.get(this.configUrl, { params: postIdParams })
  }

}
