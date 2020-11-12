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

  uploadFile(bodyObject: FormData): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
    });

    return this.httpClient.post<any>(
      this.SERVER_URL + 'binaryobject',
      bodyObject,
      {
        headers,
        reportProgress: true,
        observe: 'events',
      }
    );
  }

  downloadFile(idFileToRetrieve: number): Observable<any> {
    // Missing the binaryObject data from backend
    return this.httpClient.get<any>(
      this.SERVER_URL + 'binaryobject/multipart/' + idFileToRetrieve,
      {
        responseType: 'blob' as 'json',
      }
    );
  }
}
