import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import {HttpClient,HttpResponse} from '@angular/common/http';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class GetJsonServiceService {

  constructor(private http: HttpClient) {} 
  public getJSON(filepath:string): Observable<any> {
    return this.http.get(filepath)
                    .map((response: Response) => {  
                      return response;
                    })
  }
}  
