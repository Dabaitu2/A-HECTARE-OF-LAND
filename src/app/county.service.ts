import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { County } from '../dataFormat/county';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {error} from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class CountyService {

  private countiesUrl = 'api/counties';  // URL to web api
  constructor(private http: HttpClient) { }

  getCounties(): Observable<County[]> {
    return this.http.get<County[]>(this.countiesUrl);
  }
  getCounty(id: number): Observable<County> {
    const url = `${this.countiesUrl}/${id}`;
    return this.http.get<County>(url);
  }
}
