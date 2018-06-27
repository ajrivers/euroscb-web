import { Component, OnInit } from '@angular/core';
import { IDesignItem } from './design-item';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-design-list',
  templateUrl: './design-list.component.html',
  styleUrls: ['./design-list.component.css']
})
export class DesignListComponent implements OnInit {

  //#region Properties

  fileUrl: string = '../assets/api/designs.json';
  designItems: IDesignItem[];

  //#endregion

  //#region Constructors

  constructor(private _http: HttpClient) { }

  //#endregion

  //#region Public Methods

  public getDesignItems(): Observable<IDesignItem[]>{
    return this._http.get<IDesignItem[]>(this.fileUrl)
    .pipe(
      catchError(this.handleError)
    );
  }

  //#endregion

  //#region Private Methods

  private handleError(err){
    console.log(err.message);
    return Observable.throw(err.message);
  }

  //#endregion

  //#region Lifecycle Hookups

  ngOnInit() {
    this.getDesignItems().subscribe(
      items => this.designItems = items
    );
  }

  //#endregion

}
