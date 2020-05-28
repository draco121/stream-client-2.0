import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { imovie } from './imovie';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private api:string = '/show/movie'
  private api2= new Subject<string>();
  api3 = this.api2.asObservable();
  constructor(private http: HttpClient) { }
   
  getMovies(): Observable<string[]>
  {
    return this.http.get<string[]>(this.api);
  }
  
  getStream(id:string)
  {
    this.api2.next(id);
  }

}
