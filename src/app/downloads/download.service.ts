import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IDownload } from './download';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DownloadService {
  
  _fileUrl: string = '../assets/api/releases.json';

  constructor(private _http: HttpClient) { }

  public getDownloads(): Observable<IDownload[]> {
    return this._http.get<IDownload[]>(this._fileUrl)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(err){
    console.log(err.message);
    return Observable.throw(err.message);
  }
}
