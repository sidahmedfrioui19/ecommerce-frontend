import { Injectable } from "@angular/core";
import { HttpService } from "../http/http.service";
import { Observable } from "rxjs";

@Injectable()
export class AuthenticationService {
  constructor(private http: HttpService) {}

  createUser(userData: any): Observable<any> {
    return this.http.post('users', userData);
  }
}
