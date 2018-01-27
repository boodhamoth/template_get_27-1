import { Observable } from 'rxjs/Rx';
import { Injectable } from '@angular/core';
import {  Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class SummaryService {

  private summaryUrl:string = 'http://5a6af8238bdfbe0012adc17e.mockapi.io/summary';
    constructor(private http: Http){}
    getSummary() {
        return this.http.get(this.summaryUrl)
        .map((response:Response) => response.json())
    }

    private keyUrl:string = 'http://5a6af8238bdfbe0012adc17e.mockapi.io/keys';
    getKey() {
        return this.http.get(this.keyUrl)
        .map((response:Response) => response.json())

       
    }
    
    


}
