import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IQuestion, IFaqTypeDescription } from './question'
import { Observable } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

interface ServerData {
  faqsArray: IQuestion[];
  faqTypesArray: IFaqTypeDescription[];
}

@Injectable({
  providedIn: 'root'
})
export class FaqsService {

  _fileUrl: string = '../assets/api/faqs.json';

  constructor(private _http: HttpClient) {
    
  }

  public getServerData(): Observable<ServerData>{    
    return this._http.get<ServerData>(this._fileUrl)    
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err){
    console.log(err.message);
    return Observable.throw(err.message);
  }
}

