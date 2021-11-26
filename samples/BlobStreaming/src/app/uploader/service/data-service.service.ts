import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpResponse,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { BinaryObject } from 'src/app/core/interfaces/BinaryObject';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  SERVER_URL = 'http://localhost:8081/services/rest/binary/v1/';

  constructor(private httpClient: HttpClient) {}

  uploadFile(formdData: FormData): Observable<HttpEvent<BinaryObject>> {
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data',
    });

    return this.httpClient.post<BinaryObject>(
      this.SERVER_URL + 'binaryobject',
      formdData,
      {
        headers,
        reportProgress: true,
        observe: 'events',
      }
    );
  }

  downloadFile(idFileToRetrieve: number): Observable<any> {
    // response is not in correct format
    return this.httpClient.get<any>(
      this.SERVER_URL + 'binaryobject/multipart/' + idFileToRetrieve,
      {
        responseType: 'blob' as 'json',
      }
    );
  }
}
