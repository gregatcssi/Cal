import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class GetJsonServiceService {

  constructor(private http: HttpClient) {} 
  public getJSON(filepath:string): Observable<any[]> {
    return this.http.get<any[]>(filepath)
                    .do(data=> console.log(data))
                    .catch(this.handleError);
  }
  private handleError(err: HttpErrorResponse) {
    console.error(err.message);
    return Observable.throw(err.message);
}
}  
