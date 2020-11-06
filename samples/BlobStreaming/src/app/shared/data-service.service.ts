import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BodyObject } from './model/BodyObject';
import { BinaryObject } from './model/BinaryObject';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  SERVER_URL = 'http://localhost:8081/services/rest/binary/v1/';

  constructor(private httpClient: HttpClient) {}

  uploadFile(bodyObject: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/mixed',
    });

    return this.httpClient.post<any>(
      this.SERVER_URL + 'binaryobject',
      bodyObject,
      {
        headers,
        reportProgress: true,
        observe: 'events',
        responseType: 'json',
      }
    );
  }

  downloadFile(idFileToRetrieve: number): Observable<BinaryObject> {
    return this.httpClient.get<BinaryObject>(
      this.SERVER_URL + 'binaryobject/' + idFileToRetrieve
    );
  }
}
