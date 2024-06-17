import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpParams } from '@angular/common/http';
import { APP_CONFIG } from '../../../environments/environment';

@Injectable()
export class HttpService {
  private apiUrl: string = APP_CONFIG.apiUrl;
  constructor (private http: HttpClient) {}

  get(endpoint: string, observe: boolean): Observable<any> {
    if(observe) {
      return this.http.get(this.apiUrl + endpoint, { observe: 'response' });
    } else {
      return this.http.get(this.apiUrl + endpoint);
    }
  }

  post(endpoint: string, data: any): Observable<any> {
    return this.http.post(this.apiUrl + endpoint, data, { observe: 'response' });
  }

  put(endpoint: string, data: any): Observable<any> {
    return this.http.put(this.apiUrl + endpoint, data, { observe: 'response' });
  }

  delete(endpoint: string): Observable<any> {
    return this.http.delete(this.apiUrl + endpoint, { observe: 'response' });
  }

  search(endpoint: string, d: any) {
    let qParams = new HttpParams();
    // eslint-disable-next-line guard-for-in
    for (const key in d) {
        qParams = qParams.append(key, d[key]);
    };
    return this.http.get(this.apiUrl + endpoint, { params: qParams });
  }
}
