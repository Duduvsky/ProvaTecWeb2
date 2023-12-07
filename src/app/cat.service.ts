import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, retry, throwError } from 'rxjs';

import { Cats } from 'src/model/cat';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  baseurl = 'https://freetestapi.com/api/v1/cats'

  constructor(
    private http: HttpClient
    ){}

    getCats(): Observable<Cats> {
      return this.http.get<Cats>(this.baseurl ).pipe(retry(1), catchError(this.errorHandl));
    }

    errorHandl(error:any){
      let errorMessage = ''
      if (error.error instanceof ErrorEvent){
        errorMessage = error.error.message;
      }else{
        errorMessage = `Error code: ${error.status} \n Message: ${error.message}`
      }
      console.log(errorMessage);
      return throwError(() => {
        return errorMessage
      })
    }
    httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    }
    
}
