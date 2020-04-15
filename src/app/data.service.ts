import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
    constructor(private httpClient: HttpClient) { }

    getData(collection: string, file: string): Observable<any> {
        return this.httpClient.get(`assets/${collection}/${file}`);
    }
}