import { Injectable } from "@angular/core";
import { HttpService } from "../http/http.service";
import { Observable } from "rxjs";
import { IStore } from "../models/store.entity";

@Injectable()
export class StoreService {
  constructor(public httpService: HttpService) {}

  getStores(): Observable<IStore[]> {
    return this.httpService.get('stores', false);
  }
}
