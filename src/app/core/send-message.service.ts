import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SendMessageService {

  private api = environment.api;
  private headers = new HttpHeaders()
    .set('content-type', 'application/x-www-form-urlencoded')
    .set('Access-Control-Allow-Origin', '*');

  constructor(private _http: HttpClient) { }

  sendMessage(data: any): Observable<any> {
    return this._http.get<any>(`${this.api}${data}`, {'headers': this.headers});
  }
}
